import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import AppWithRedux from './AppWithRedux';
import {ReduxStoreProviderDecorator} from './state/ReduxStoreProviderDecorator';

export default {
    title: 'TODOLIST/AppWithRedux',
    component: AppWithRedux,
    decorators:[ReduxStoreProviderDecorator]
} as ComponentMeta<typeof AppWithRedux>;

const Template: ComponentStory<typeof AppWithRedux> = (args) =><AppWithRedux/> ;

export const AppWithReduxStories = Template.bind({});
AppWithReduxStories.args = {
    addItem: action('button clicked inside form'),
};
