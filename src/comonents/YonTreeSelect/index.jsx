import React from 'react'
import { TreeSelect } from 'antd'

import './index.css'
const YonTreeSelect = (props) => {
    return(
        <TreeSelect
          {...props}
          switcherIcon={<span></span>}
        />
    )
}
export default YonTreeSelect