import React from 'react'
import { Radio } from 'antd'

import './index.css'

const { Button, Group } = Radio

const YonRadio = (props) => {
    return <Radio {...props}/>
}

YonRadio.Button = Button
YonRadio.Group = Group

export default YonRadio