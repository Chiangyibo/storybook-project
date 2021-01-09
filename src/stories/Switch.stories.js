import React from "react"
import { storiesOf } from "@storybook/react"
import YonSwitch from "../comonents/YonSwitch"

const Switch = () => {
  return (
    <>
      <div style={{ margin: "0 0 50px 0" }}>
        <h3>基本</h3>
        <YonSwitch
          defaultChecked
          onChange={(checked) => {
            console.log(`switch to ${checked}`)
          }}
        />
      </div>

      <div style={{ margin: "0 0 50px 0" }}>
        <h3>选中不可编辑</h3>
        <YonSwitch defaultChecked disabled={true} />
      </div>
      <div style={{ margin: "0 0 50px 0" }}>
        <h3>未选中不可编辑</h3>
        <YonSwitch disabled={true} />
      </div>
    </>
  )
}

const note = `
  ### 注释
  仅改了样式，其他 API 全部继承 antd。
`

storiesOf("Switch", module).add("Switch", Switch, { info: { text: note } })
