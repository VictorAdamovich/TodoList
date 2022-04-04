import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";

//GUI
//CLI
//CRUD
export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {
    //BLL
    const TodoListTitle: string = 'What to learn';

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'Css', isDone: true},
        {id: 3, title: 'JS/TS', isDone: false}
    ])

    const removeTask = function (taskId: number) {
        setTasks(tasks.filter(t => t.id !== taskId))
    }

    const [filter, setFilter] = useState<FilterValuesType>('all')
    const changeFilter = (filter: FilterValuesType) => {
        setFilter(filter)
        console.log(filter)
    }


    //UL
    return (
        <div className="App">
            <TodoList
                title={TodoListTitle}
                tasks={tasks}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />

        </div>
    );
}

export default App;
