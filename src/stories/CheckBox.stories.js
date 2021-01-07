import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import YonButton from '../comonents/YonButton'
import YonCheckbox from '../comonents/YonCheckbox'


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
        <YonCheckbox checked={checked} disabled={disabled} onChange={onChange}>
          {checked ? "Checked" : "Unchecked"}-
          {disabled ? "Disabled" : "Enabled"}
        </YonCheckbox>
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
