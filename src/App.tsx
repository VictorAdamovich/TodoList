import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";

//GUI
//CLI
//CRUD

function App() {
    //BLL
    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'Css', isDone: true},
        {id: 3, title: 'JS/TS', isDone: false}
    ])

    const TodoListTitle: string = 'What to learn';

    const removeTask = function (taskId: number) {
        setTasks(tasks.filter(t => t.id !== taskId))
    }

    //UL
    return (
        <div className="App">
            <TodoList
                title={TodoListTitle}
                tasks={tasks}
                removeTask={removeTask}/>
        </div>
    );
}

export default App;
