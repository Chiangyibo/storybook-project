import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info'


import '../src/common/index.js';


const style = { 
  borderBottom:'2px solid #1ea7fd', 
  padding:'0 20px 40px 0', 
  margin:'0 40px',
}

const storyWrapper = (stroyFn) => (
  <div style={style}>
    <h1>组件演示</h1>
    {stroyFn()}
  </div>
)

addDecorator(storyWrapper)
addDecorator(withInfo)
addParameters({info: { inline: true, header: false}})