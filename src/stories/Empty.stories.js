import React from 'react';
import { storiesOf } from "@storybook/react";
import YonEmpty from '../comonents/YonEmpty';

import {
  ConfigProvider,
  TreeSelect,
  Select,
  Cascader,
  Transfer,
  Table,
  List,
} from 'antd';

const style = { width: 200 };
const Empty = () => <>
         <ConfigProvider renderEmpty={YonEmpty}>
        <div>
          <h4>Select</h4>
          <Select style={style} />

          <h4>TreeSelect</h4>
          <TreeSelect style={style} treeData={[]} />

          <h4>Cascader</h4>
          <Cascader style={style} options={[]} showSearch />

          <h4>Transfer</h4>
          <Transfer />

          <h4>Table</h4>
          <Table
            style={{ marginTop: 8 }}
            columns={[
              {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
              },
              {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
              },
            ]}
          />

          <h4>List</h4>
          <List />
        </div>
      </ConfigProvider>
</>;

const note = `
  #### 注释：仅改了样式， API 全部继承 antd。
`

storiesOf("#Empty", module).add('#Empty', Empty, {info:{text: note}});