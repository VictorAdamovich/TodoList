import {tasksReducer} from 'features/TodolistsList/tasks-reducer';
import {todolistsReducer} from 'features/TodolistsList/todolists-reducer';
import {combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {appReducer} from './app-reducer';
import {authReducer} from 'features/Login/auth-reducer';
import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import logger from 'redux-logger';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  todolists: todolistsReducer,
  app: appReducer,
  auth: authReducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .prepend(
          thunkMiddleware)
        .concat(logger),
  }
);

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;

// @ts-ignore
window.store = store;
