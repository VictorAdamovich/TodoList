import React, {useState} from 'react';
import {v1} from 'uuid';
import './App.css';
import TodoList, {TaskType} from "./TodoList";
import * as assert from "assert";

//GUI
//CLI
//CRUD
export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {
    //BLL:
    const TodoListTitle: string = 'What to learn';

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: 'HTML', isDone: true},
        {id: v1(), title: 'Css', isDone: true},
        {id: v1(), title: 'JS/TS', isDone: false}
    ])

    const removeTask = function (taskId: string) {
        setTasks(tasks.filter(t => t.id !== taskId))
    }

    const [filter, setFilter] = useState<FilterValuesType>('all')
    const changeFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }

    const addTask = (title: string) => {
        // const newTask: TaskType = {
        //     id: v1()
        //     title: title
        //     isDone: false
        // }
        // const copyTasks = [...tasks]
        // copyTasks.push(newTask)
        // setTasks(copyTasks)
        //

        setTasks([{id: v1(), title, isDone: false}, ...tasks])
    }

    //UI:
    let tasksForRender;
    switch (filter) {
        case "completed":
            tasksForRender = tasks.filter(t => t.isDone === true)
            break;
        case 'active':
            tasksForRender = tasks.filter(t => t.isDone === false)
            break
        default:
            tasksForRender = tasks
    }

    return (
        <div className="App">
            <TodoList
                title={TodoListTitle}
                tasks={tasksForRender}
                addTask={addTask}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />

        </div>
    );
}

export default App;
