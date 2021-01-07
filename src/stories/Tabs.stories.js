import React from 'react';
import { storiesOf } from "@storybook/react";
import YonTabs from '../comonents/YonTabs';

const { TabPane } = YonTabs;

const callback = (key) => {
    console.log(key);
}

const Tabs = () => <>
    <YonTabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="这是个灰常灰常长的Tab " key="1">
            <p>Content of Tab Pane 1</p>
            <p>Content of Tab Pane 1</p>
            <p>Content of Tab Pane 1</p>
            <p>Content of Tab Pane 1</p>
          </TabPane>
        <TabPane tab="这是个段的Tab " key="2">
            <p>Content of Tab Pane 2</p>
            <p>Content of Tab Pane 2</p>
            <p>Content of Tab Pane 2</p>
            <p>Content of Tab Pane 2</p>
          </TabPane>
        <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
    </YonTabs>
</>;

const note = `
  ### 注释
  仅改了样式，API 全部继承 antd。
`

storiesOf("Tabs", module).add('Tabs', Tabs, {info:{text: note}});