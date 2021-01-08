import React from 'react'
import { storiesOf } from '@storybook/react'

import YonCheckbox from '../comonents/YonCheckbox'


const YonCheckBox = () => {

  return (
    <>
        <YonCheckbox>
          checked 
        </YonCheckbox>

        <YonCheckbox checked>
          checked 
        </YonCheckbox>

        <YonCheckbox disabled>
          disabled 
        </YonCheckbox>
    </>
  )
}

const note = `
  ### 注释
  仅改了样式，其他 API 全部继承 antd。
`;

storiesOf("Checkbox", module).add("Checkbox", YonCheckBox, {info:{text: note}})
