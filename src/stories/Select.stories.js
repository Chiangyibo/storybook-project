import React from 'react';
import { storiesOf } from "@storybook/react";
import YonSelect from '../comonents/YonSelect';

const { Option } = YonSelect;

const Select = () => <>
        <YonSelect defaultValue="2" >
          <Option key="1" value="1">选项1</Option>
          <Option key="2" value="2">选项2</Option>
          <Option key="3" value="3">选项3</Option>
        </YonSelect>
        <YonSelect defaultValue="2" label="机器人名称">
          <Option key="1" value="1">选项1</Option>
          <Option key="2" value="2">选项2</Option>
          <Option key="3" value="3">选项3</Option>
        </YonSelect>
        <YonSelect label="机器人名称" required style={{ width: 200 }}>
          <Option key="1" value="1">选项1</Option>
          <Option key="2" value="2">选项2</Option>
          <Option key="3" value="3">选项3</Option>
        </YonSelect>
</>;

const note = `
  #### 注释：仅改了样式，添加了2个 API: label、required, 其他 API 全部继承 antd。
  * label 输入框前的标题
  * required 是否为必输项
`

storiesOf("Select", module).add('Select', Select, {info:{text: note}});