import React from 'react'
import { TreeSelect } from 'antd'

import './index.css'
const { TreeNode, SHOW_ALL, SHOW_PARENT, SHOW_CHILD } = TreeSelect

const YonTreeSelect = (props) => {
    return(
        <TreeSelect
          {...props}
          switcherIcon={<span></span>}
          maxTagCount={'responsive'}
        />
    )
}

YonTreeSelect.TreeNode = TreeNode
YonTreeSelect.SHOW_ALL = SHOW_ALL
YonTreeSelect.SHOW_PARENT = SHOW_PARENT
YonTreeSelect.SHOW_CHILD = SHOW_CHILD

export default YonTreeSelect