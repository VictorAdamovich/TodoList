import React, {useState} from 'react';
import {FilterValuesType} from './App';

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    addTask: (title: string) => void
    removeTask: (taskID: string) => void
    changeFilter: (filter: FilterValuesType) => void
};

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

const TodoList = (props: TodoListPropsType) => {
    const [title, setTitle] = useState<string>('')

    const onClickAddTask = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle) {
            props.addTask(title)
        }
        setTitle('')
    }

    const tasksListItems = props.tasks.map(t => {
        return (
            <li key={t.id}>
                <input type="checkbox" checked={t.isDone}/>
                <span>{t.title}</span>
                <button onClick={() => props.removeTask(t.id)}>x</button>
            </li>
        )
    })

    const onChangeSetTitle = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)

    const onPressSetTitle = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onClickAddTask()
        }
    }


    const cangeFilre = (filter: FilterValuesType) => {
        return () => props.changeFilter(filter)
    }

//hello world
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input
                    value={title}
                    onChange={onChangeSetTitle}
                    onKeyPress={onPressSetTitle}
                />
                <button onClick={onClickAddTask}>+</button>
            </div>
            <ul>
                {tasksListItems}
            </ul>
            <div>
                <button onClick={cangeFilre('all')}>All</button>
                <button onClick={cangeFilre('active')}>Active</button>
                <button onClick={cangeFilre('completed')}>Completed</button>
            </div>
        </div>

    );
};

export default TodoList;