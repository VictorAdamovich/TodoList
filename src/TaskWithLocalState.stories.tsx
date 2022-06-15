import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Task} from './Task';
import {action} from '@storybook/addon-actions';
import {TaskType} from './Todolist';

export default {
    title: 'TODOLIST/TaskWithLocalState',
    component: Task
} as ComponentMeta<typeof Task>;

const TaskWithLocalState = () => {
    let [task, setTask] = useState<TaskType>({id: '1', title: 'hello', isDone: false});

    const changeTaskStatus = () => setTask({...task, isDone: !task.isDone});

    return <Task
        changeTaskStatus={changeTaskStatus}
        changeTaskTitle={action('changeTaskTitle')}
        removeTask={action('changeTaskStatus')}
        task={task}
        todolistId={'task.id'}
    />;
};


const Template: ComponentStory<typeof TaskWithLocalState> = (args) => <TaskWithLocalState/>;

export const TaskWithLocalStateStories = Template.bind({});

TaskWithLocalStateStories.args = {};