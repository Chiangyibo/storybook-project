import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { Checkbox } from 'antd'
import YonButton from '../comonents/YonButton'

import '../comonents/YonCheckbox/index.css'

const YonCheckBox = () => {
  const [checked, setChecked] = useState(true)
  const [disabled, setDisabled] = useState(false)

  const toggleChecked = () => {
    setChecked((c) => !c)
  }

  const toggleDisable = () => {
    setDisabled((d) => !d)
  }

  const onChange = (e) => {
    setChecked(e.target.checked)
  }

  return (
    <>
      <p style={{ marginBottom: "20px" }}>
        <Checkbox checked={checked} disabled={disabled} onChange={onChange}>
          {checked ? "Checked" : "Unchecked"}-
          {disabled ? "Disabled" : "Enabled"}
        </Checkbox>
      </p>
      <p>
        <YonButton yontype="primary" onClick={toggleChecked}>
          {!checked ? "Check" : "Uncheck"}
        </YonButton>
        <YonButton
          yontype="primary"
          onClick={toggleDisable}
        >
          {!disabled ? "Disable" : "Enable"}
        </YonButton>
      </p>
    </>
  )
}

storiesOf("Checkbox", module).add("Checkbox", YonCheckBox)
