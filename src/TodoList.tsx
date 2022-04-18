import React, {ChangeEvent, useState} from 'react';
import {FilterValuesType} from './App';

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    filter: FilterValuesType
    addTask: (title: string) => void
    removeTask: (taskID: string) => void
    changeFilter: (filter: FilterValuesType) => void
    changeTaskStatus: (taskID: string, isDone: boolean) => void
};

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

const TodoList = (props: TodoListPropsType) => {
    const [error, setError] = useState<boolean>(false)

    const [title, setTitle] = useState<string>('')
    const onClickAddTask = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle) {
            props.addTask(title)
        } else {
            setError(true)
        }
        setTitle('')
    }

    const onChangeSetTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        error && setError(false)
    }

    const onPressSetTitle = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onClickAddTask()
        }
    }

    const changeFilter = (filter: FilterValuesType) => {
        return () => props.changeFilter(filter)
    }

    const getTasksForRender = (tasks: Array<TaskType>, filter: FilterValuesType) => {
        let tasksForRender;
        switch (filter) {
            case "completed":
                tasksForRender = tasks.filter(t => t.isDone === true)
                break
            case "active":
                tasksForRender = tasks.filter(t => t.isDone === false)
                break
            default:
                tasksForRender = tasks
        }
        return tasksForRender
    }

    const tasksForRender: Array<TaskType> = getTasksForRender(props.tasks, props.filter)

    const tasksListItems = tasksForRender.length
        ? tasksForRender.map(t => {
            const onClickRemoveTask = () => props.removeTask(t.id)
            const onChangeChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
                props.changeTaskStatus(t.id, e.currentTarget.checked)

            }
            const taskClasses = t.isDone ? 'isDone' : ''
            const inputClasses = error ? 'error' : ' '

            return (
                <li key={t.id}>
                    <input
                        type="checkbox"
                        checked={t.isDone}
                        onChange={onChangeChangeStatus}
                        className={inputClasses}
                    />
                    <span className={taskClasses}>{t.title}</span>
                    <button onClick={onClickRemoveTask}>x</button>

                </li>
            )
        })
        : <span>Нет задач в списке </span>


    const allBtnClasses = props.filter === 'all' ? 'active-filter' : ' '
    const activeBtnClasses = props.filter === 'active' ? 'active-filter' : ' '
    const completedBtnClasses = props.filter === 'completed' ? 'active-filter' : ' '

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
                {error && <div className={'error-massage'}>Title is required!</div>}
            </div>
            <ul>
                {tasksListItems}
            </ul>
            <div>
                <button
                    className={allBtnClasses}
                    onClick={changeFilter('all')}>All
                </button>
                <button
                    className={activeBtnClasses}
                    onClick={changeFilter('active')}>Active
                </button>
                <button
                    className={completedBtnClasses}
                    onClick={changeFilter('completed')}>Completed
                </button>
            </div>
        </div>

    );
};

export default TodoList;