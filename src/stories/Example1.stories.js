import React from 'react';

import  YonButton  from '../comonents/YonButton';

export default {
  title: 'Example/Example1',
  component: YonButton
}

const Template = (args) => <YonButton {...args} >按钮</YonButton>;

export const Primary = Template.bind({});
Primary.args = {
  yontype: 'primary'
};

export const Dark = Template.bind({});
Dark.args = {
  yontype: 'dark'
};

export const Light = Template.bind({});
Light.args = {
  yontype: 'light'
};

export const Default = Template.bind({});
Default.args = {
  yontype: 'default'
};
