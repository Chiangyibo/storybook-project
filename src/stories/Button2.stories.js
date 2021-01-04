import React from 'react';
import { storiesOf } from "@storybook/react";
import { YonButton } from '../comonents/YonButton';

const Button = () => {
  return (
    <div>
      <YonButton yontype="primary">主要按钮</YonButton>
      <YonButton yontype="primary" disabled>主要按钮</YonButton>
      <YonButton yontype="default">默认按钮</YonButton>
      <YonButton yontype="default" disabled>默认按钮</YonButton>
      <YonButton yontype="dark">深色按钮</YonButton>
      <YonButton yontype="dark" disabled>深色按钮</YonButton>
      <YonButton yontype="light">浅色按钮</YonButton>
      <YonButton yontype="light" disabled>浅色按钮</YonButton>
    </div>
  )
}
const Button2 = () => {
  return (
    <div>
      <YonButton yonsize="middle" yontype="primary">主要按钮2</YonButton>
    </div>
  )
}

storiesOf("按钮", module).add('Button', Button);
storiesOf("按钮2", module).add('Button2', Button2);