import {FilterValuesType, TodolistType} from '../App';
import {v1} from 'uuid';

export const REMOVE_TODOLIST = 'REMOVE-TODOLIST';
export const ADD_TODOLIST = 'ADD-TODOLIST';
const CHANGE_TODOLIST_TITLE = 'CHANGE-TODOLIST-TITLE';
const CHANGE_TODOLIST_FILTER = 'CHANGE-TODOLIST-FILTER';


type ActionsType = ReturnType<typeof removeTodolistAC>
    | ReturnType<typeof addTodolistAC>
    | ReturnType<typeof changeTodolistTitleAC>
    | ReturnType<typeof changeTodolistFilterAC>

const initialState: Array<TodolistType> = [];

export const todolistsReducer = (state: Array<TodolistType> = initialState, action: ActionsType): Array<TodolistType> => {
    switch (action.type) {
        case REMOVE_TODOLIST: {
            return state.filter(tl => tl.id !== action.payload.id);
        }
        case ADD_TODOLIST: {
            return [...state, {id: action.payload.todolistId, title: action.payload.title, filter: 'all'}];
        }
        case CHANGE_TODOLIST_TITLE: {
            const todolist = state.find(tl => tl.id === action.payload.id);
            if (todolist) {
                // если нашёлся - изменим ему заголовок
                todolist.title = action.payload.title;
            }
        }
            return [...state];
        case CHANGE_TODOLIST_FILTER: {
            const todolist = state.find(tl => tl.id === action.payload.id);
            if (todolist) {
                // если нашёлся - изменим ему заголовок
                todolist.filter = action.payload.filter;
            }
            return [...state];
        }
        default:
            return state;
    }
};

export const removeTodolistAC = (todolistId: string) => {
    return {type: REMOVE_TODOLIST, payload: {id: todolistId}} as const;
};
export const addTodolistAC = (title: string) => {
    return {type: ADD_TODOLIST, payload: {title: title, todolistId: v1()}} as const;
};
export const changeTodolistTitleAC = (id: string, title: string) => {
    return {type: CHANGE_TODOLIST_TITLE, payload: {id: id, title: title}} as const;
};
export const changeTodolistFilterAC = (id: string, filter: FilterValuesType) => {
    return {type: CHANGE_TODOLIST_FILTER, payload: {id: id, filter: filter}} as const;
};

