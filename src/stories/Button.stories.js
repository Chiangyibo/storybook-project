import React from 'react';
import { storiesOf } from "@storybook/react";
import { action } from '@storybook/addon-actions'
import YonButton from '../comonents/YonButton';

import { SearchOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';

import iconqita from './img/qita.svg';
import iconcaiwu from './img/caiwu.svg';

const ButtonGroup = YonButton.Group;




const yontype = () => <>
  <YonButton yontype="primary">主要按钮</YonButton>
  <YonButton yontype="primary" disabled>主要按钮</YonButton>
  <YonButton yontype="default">默认按钮</YonButton>
  <YonButton yontype="default" disabled>默认按钮</YonButton>
  <YonButton yontype="dark">深色按钮</YonButton>
  <YonButton yontype="dark" disabled>深色按钮</YonButton>
  <YonButton yontype="light">浅色按钮</YonButton>
  <YonButton yontype="light" disabled>浅色按钮</YonButton>
  <YonButton yontype="link" >Link 按钮</YonButton>
  <YonButton yontype="link" disabled>Link 按钮</YonButton>
</>;


const yonsize = () => <>
  <YonButton yontype="primary">28px 默认按钮</YonButton>
  <YonButton yonsize="middle" yontype="primary">26px 弹框按钮</YonButton>
  <YonButton yonsize="small" yontype="primary">22px 行操作按钮</YonButton>
</>;
const width = () => <>
  <YonButton yontype="dark" width="100%" >block </YonButton>
  <YonButton yontype="dark" width="28px" icon={<SearchOutlined />}></YonButton>
</>;




const props = () => (<div>
  <div style={{ padding: '10px 0' }}>
    <YonButton yontype="primary" loading>loading</YonButton>
    <YonButton yontype="default" onClick={action('clicked')}>Click Me</YonButton>

    <YonButton yontype="default" width="28px" shape="circle" icon={<SearchOutlined />}></YonButton>
    <YonButton yontype="default" width="28px" shape="circle" icon={<SearchOutlined />} disabled></YonButton>
  </div>



  <div style={{ padding: '10px 0' }}>
    <ButtonGroup>
      <YonButton yontype="default" width="28px" icon={<LeftOutlined />}></YonButton>
      <YonButton yontype="default" width="28px" icon={<RightOutlined />}></YonButton>
    </ButtonGroup>
  </div>

  <div style={{ padding: '10px 0' }}>
    <ButtonGroup>
      <YonButton yontype="default">默认按钮1</YonButton>
      <YonButton yontype="default">默认按钮2</YonButton>
      <YonButton yontype="default">默认按钮3</YonButton>
    </ButtonGroup>
  </div>

  <div style={{ padding: '10px 0' }}>
    <ButtonGroup>
      <YonButton yontype="default">按钮组1</YonButton>
      <YonButton yontype="default">按钮组2</YonButton>
    </ButtonGroup>
  </div>

  <YonButton yontype="link" icon={<img alt="icon" src={iconqita} style={{ width: '22px', paddingRight: '4px', position: 'relative', top: '-2px' }} />}>自定义图标按钮</YonButton>
  <YonButton yontype="default" icon={<img alt="icon" src={iconcaiwu} style={{ width: '22px', paddingRight: '4px', position: 'relative', top: '-2px' }} />}>自定义图标按钮</YonButton>
 
  <YonButton yontype="link" icon={<SearchOutlined />}>Antd 图标按钮</YonButton>
  <YonButton yontype="default" icon={<SearchOutlined />}>Antd 图标按钮</YonButton>
</div>
)


const note = `
  ####  注释：icon 属性传入的是一个组件，可以使用 antd 图标，也可以自定义图标。
`

storiesOf("Button", module)
  .add('width', width)
  .add('yontype', yontype)
  .add('yonsize', yonsize)
  .add('props', props, {info:{text: note}});