import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import [FCName], { [FCName]Props } from './[FCName]';

export default {
    title: "/[FCName]",
    component: [FCName],
} as Meta;

const Template: Story<[FCName]Props> = (args) => {
    return <[FCName] {...args} />;
};

export const Default = Template.bind({});