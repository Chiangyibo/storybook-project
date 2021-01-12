import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from '@storybook/addon-actions'
import YonPopconfirm from "../comonents/YonPopconfirm"

const Popconfirm = () => {
  return (
    <>
       <YonPopconfirm
        title="Are you sure to delete this task?"
        onConfirm={action('click ok')}
        onCancel={action('click no')}
        okText="Yes"
        cancelText="No"
      >
        <a href="#">Delete</a>
      </YonPopconfirm>
    </>
  )
}

const note = `
  #### 注释：仅改了样式，其他 API 全部继承 antd。
`

storiesOf("#Popconfirm", module).add("#Popconfirm", Popconfirm, { info: { text: note } })
