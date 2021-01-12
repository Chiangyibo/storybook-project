import React, { useState } from "react"
import { storiesOf } from "@storybook/react"
import YonRadio from "../comonents/YonRadio"

const Radio = () => {
  const [radioVal, setRadioVal] = useState(1)
  return (
    <>
      <div style={{ margin: "0 0 50px 0" }}>
        <h3>基本</h3>
        <YonRadio />
      </div>

      <div style={{ margin: "0 0 50px 0" }}>
        <h3>单选组合</h3>
        <YonRadio.Group
          onChange={(e) => {
            setRadioVal(e.target.value)
          }}
          value={radioVal}
        >
          <YonRadio value={1}>A</YonRadio>
          <YonRadio value={2}>B</YonRadio>
          <YonRadio value={3}>C</YonRadio>
          <YonRadio value={4}>D</YonRadio>
        </YonRadio.Group>
      </div>

      <div style={{ margin: "0 0 50px 0" }}>
        <h3>不可用</h3>
        <YonRadio defaultChecked={false} disabled={true}>
          Disabled
        </YonRadio>
        <YonRadio defaultChecked disabled={true}>
          Disabled
        </YonRadio>
      </div>
    </>
  )
}

const note = `
  #### 注释：仅改了样式，其他 API 全部继承 antd。
`

storiesOf("Radio", module).add("Radio", Radio, { info: { text: note } })
