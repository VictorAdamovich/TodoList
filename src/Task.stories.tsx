import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Task} from './Task';
import {action} from '@storybook/addon-actions';

export default {
    title: 'TODOLIST/Task',
    component: Task,
    args: {
        changeTaskStatus: action('changeTaskStatus'),
        changeTaskTitle: action('changeTaskTitle'),
        removeTask: action('removeTask'),
        todolistId: 'Hello'
    }
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const TaskIsDoneStories = Template.bind({});

TaskIsDoneStories.args = {
    task: {id: 'string', isDone: true, title: 'JS'},
};
export const TaskIsNotDoneStories = Template.bind({});
TaskIsNotDoneStories.args = {
    task: {id: 'string', isDone: false, title: 'React'}
};
