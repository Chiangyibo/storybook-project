import React from 'react';
import { storiesOf } from "@storybook/react";
import { action } from '@storybook/addon-actions'
import YonMultiInput from '../comonents/YonMultiInput';

const propsTextMap = {
  "zh_TW": "哈喽TW",
  "en_US": "hello",
  "zh_CN": "哈喽",
  "fr_FR": ""
};

const MultiInput = () => {
  return <>
    <YonMultiInput 
        name="name"
        label="名称"
        onChange={action('+++')} 
        propsTextMap={propsTextMap}
        required
        style={{ width: 280 }} 
      />
      <YonMultiInput 
        name="description"
        label="描述"
        type="TextArea"
        onChange={action('---')} 
        style={{ width: 280 }} 
      />
  </>
}

const note = `
  #### 注释：添加了5个API：
  * name: 返回数据的字段名,
  * label: Input框的label,
  * style: 设置Input的样式，如宽度
  * required: 是否必输，加*号,
  * propsTextMap: 提供回填的数据,例如:
   {
     "zh_CN": "哈喽",
     "zh_TW": "哈嘍",
     "en_US": "hello",
     "fr_FR": ""
    }
  * onChange: function(data) {  console.log(data); // {name: "", nameMultiLangText: {"zh_CN": ""}} } 

`

storiesOf("MultiInput", module).add('MultiInput', MultiInput, {info:{text: note}});