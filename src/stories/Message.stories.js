import React from 'react';
import { storiesOf } from "@storybook/react";
import YonMessage from '../comonents/YonMessage';



const Message = () => {
  return <>
    <a style={{paddingRight:'20px'}} onClick={()=>YonMessage.success('hello', 5)}>success</a>
    <a style={{paddingRight:'20px'}} onClick={()=>YonMessage.error('hello', 5)}>error</a>
    <a style={{paddingRight:'20px'}} onClick={()=>YonMessage.warn('hello', 5)}>warn</a>
    <a style={{paddingRight:'20px'}} onClick={()=>YonMessage.info('hello', 5)}>info</a>
    <a style={{paddingRight:'20px'}} onClick={()=>YonMessage.warn('loading', 5).then(() => YonMessage.success('Loading finished', 2.5))}>then</a>
  </>
}

const note = `
  #### 注释：仅改了样式， API 全部继承 antd。
`

storiesOf("Message", module).add('Message', Message, {info:{text: note}});