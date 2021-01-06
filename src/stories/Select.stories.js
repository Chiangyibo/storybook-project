import React from 'react';
import { storiesOf } from "@storybook/react";
import YonSelect from '../comonents/YonSelect';

const { Option } = YonSelect;

const select = () => <>
     <YonSelect defaultValue="2"d onChang={(v)=>console.log(v)}>
          <Option key="1" value="1">选项1</Option>
          <Option key="2" value="2">选项2</Option>
          <Option key="3" value="3">选项3</Option>
        </YonSelect>
</>;






storiesOf("Select", module)
  .add('select', select);