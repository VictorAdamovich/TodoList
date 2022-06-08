import {TasksStateType} from '../App';
import {v1} from 'uuid';
import {ADD_TODOLIST, addTodolistAC, REMOVE_TODOLIST, removeTodolistAC} from './todolists-reducer';

const REMOVE_TASK='REMOVE-TASK'
const ADD_TASK='ADD-TASK'
const CHANGE_TASK_STATUS='CHANGE-TASK-STATUS'
const CHANGE_TASK_TITLE='CHANGE-TASK-TITLE'


const initialState: TasksStateType = {};

type ActionsType = ReturnType<typeof removeTaskAC>
    | ReturnType<typeof addTaskAC>
    | ReturnType<typeof changeTaskStatusAC>
    | ReturnType<typeof changeTaskTitleAC>
    | ReturnType<typeof addTodolistAC>
    | ReturnType<typeof removeTodolistAC>

export const tasksReducer = (state = initialState, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case REMOVE_TASK:
            return {
                ...state,
                [action.payload.todolistId]: state[action.payload.todolistId].filter(el => el.id !== action.payload.taskId)
            };
        case ADD_TASK:
            return {
                ...state,
                [action.payload.todolistId]: [{id: v1(), title: action.payload.title, isDone: false},
                    ...state[action.payload.todolistId]]
            };
        case CHANGE_TASK_STATUS: {
            return {
                ...state,
                [action.payload.todolistId]: state[action.payload.todolistId].map(el => el.id === action.payload.taskId ? {
                    ...el, isDone: action.payload.isDone
                } : el)
            };
        }
        case CHANGE_TASK_TITLE:
            return {
                ...state,
                [action.payload.todolistId]: state[action.payload.todolistId].map(el => el.id === action.payload.taskId ? {
                    ...el, title: action.payload.title
                } : el)
            };
        case ADD_TODOLIST:
            return {
                ...state,
                [action.payload.todolistId]: []
            };
        case REMOVE_TODOLIST: {
            let copyState = {...state};
            delete copyState[action.payload.id];
            return copyState;
        }
        default:
            return state;
    }
};

export const removeTaskAC = (taskId: string, todolistId: string) => {
    return {type: REMOVE_TASK, payload:{ todolistId, taskId}} as const;
};
export const addTaskAC = (title: string, todolistId: string) => {
    return {type: ADD_TASK, payload:{ title, todolistId}} as const;
};
export const changeTaskStatusAC = (taskId: string,
                                   isDone: boolean,
                                   todolistId: string) => {
    return {type: CHANGE_TASK_STATUS, payload:{ isDone, todolistId, taskId}} as const;
};
export const changeTaskTitleAC = (taskId: string,
                                  title: string,
                                  todolistId: string) => {
    return {type: CHANGE_TASK_TITLE, payload:{ title, todolistId, taskId}} as const;
};

