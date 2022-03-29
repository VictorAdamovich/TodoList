import React from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";

function App() {
    const TodoListNumber: string = 'фыв';
    const TodoListNumber2: string = 'енотик2';
    // const TodoListNumber3: string = 'енотик3';

    const tasks_1: Array<TaskType> = [
        {id:1, title:'HTML',isDone:true},
        {id:2, title:'Css',isDone:true},
        {id:3, title:'JS/TS',isDone:false}
    ]
    const tasks_2: Array<TaskType> = [
        {id:1, title:'Cat',isDone:true},
        {id:2, title:'Dog',isDone:true},
        {id:3, title:'Ts/BTS',isDone:false}
    ]

    return (
        <div className="App">
            <TodoList
                title={TodoListNumber}
                tasks={tasks_1}/>
            <TodoList
                title={TodoListNumber2}
                tasks={tasks_2}/>
        </div>
    );
}

export default App;
