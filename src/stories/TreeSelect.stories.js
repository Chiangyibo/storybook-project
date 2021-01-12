import React, { useState } from "react"
import { storiesOf } from "@storybook/react"
import YonTreeSelect from "../comonents/YonTreeSelect"

const SHOW_ALL = YonTreeSelect.SHOW_ALL
const TreeNode = YonTreeSelect.TreeNode

const TreeSelect = () => {
  const [selectVal, changeVal] = useState("")
  const [checkVals, setCheckVals] = useState([])
  const [selectVals, setSelectVals] = useState(undefined)
  const treeData = [
    {
      title: "Node1",
      value: "0-0",
      key: "0-0",
      children: [
        {
          title: "Child Node1",
          value: "0-0-0",
          key: "0-0-0",
        },
      ],
    },
    {
      title: "Node2",
      value: "0-1",
      key: "0-1",
      children: [
        {
          title: "Child Node3",
          value: "0-1-0",
          key: "0-1-0",
        },
        {
          title: "Child Node4",
          value: "0-1-1",
          key: "0-1-1",
        },
        {
          title: "Child Node5",
          value: "0-1-2",
          key: "0-1-2",
        },
      ],
    },
  ]

  return (
    <>
      <div style={{ margin: "0 0 50px 0" }}>
        <h3>普通下拉树</h3>
        <div style={{ width: 250 }}>
          <YonTreeSelect
            style={{ width: "100%" }}
            value={selectVal}
            dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
            treeData={treeData}
            placeholder="Please select"
            treeDefaultExpandAll
            onChange={(val) => {
              changeVal(val)
            }}
          />
        </div>
      </div>
      <div style={{ margin: "0 0 50px 0" }}>
        <h3>下拉多选树</h3>
        <div style={{ width: 250 }}>
          <YonTreeSelect
            showSearch
            style={{ width: "100%" }}
            value={selectVals}
            dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
            placeholder="Please select"
            allowClear
            multiple
            treeDefaultExpandAll
            onChange={(val) => {
              setSelectVals(val)
            }}
          >
            <TreeNode value="parent 1" title="parent 1">
              <TreeNode value="parent 1-0" title="parent 1-0">
                <TreeNode value="leaf1" title="my leaf" />
                <TreeNode value="leaf2" title="your leaf" />
              </TreeNode>
              <TreeNode value="parent 1-1" title="parent 1-1">
                <TreeNode
                  value="sss"
                  title={<b style={{ color: "#08c" }}>sss</b>}
                />
              </TreeNode>
            </TreeNode>
          </YonTreeSelect>
        </div>
      </div>
      <div style={{ margin: "0 0 50px 0" }}>
        <h3>可勾选下拉多选树</h3>
        <div style={{ width: 250 }}>
          <YonTreeSelect
            style={{ width: "100%" }}
            value={checkVals}
            dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
            treeData={treeData}
            placeholder="Please select"
            treeDefaultExpandAll
            showCheckedStrategy={SHOW_ALL}
            treeCheckable={true}
            onChange={(val) => {
              setCheckVals(val)
            }}
          />
        </div>
      </div>
    </>
  )
}

const note = `
  #### 注释：只修改了样式，其他 API 全部继承 antd。
  注意以下两点：
  * switcherIcon 已重置为空的span标签，展开收起图标已在css中重写；
  * maxTagCount 最多展示tag数已改为响应式
`

storiesOf("TreeSelect", module).add("TreeSelect", TreeSelect, {
  info: { text: note },
})
