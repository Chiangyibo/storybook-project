import React from 'react';
import { storiesOf } from "@storybook/react";
import YonPagination from '../comonents/YonPagination';


const options = [4,8,12,16,64]


const fixedbottom = () => <>
    <YonPagination total={89} />
    <YonPagination total={89} pageSizeOptions={options}/>
    <YonPagination total={89} fixedbottom/>
</>;



const note = `
  ### 注释
  API 仅添加一个 fixedbottom，其他 API 全部继承 antd。
  * fixedbottom 固定到底部
`


storiesOf("Pagination", module).add('Pagination', fixedbottom, {info:{text: note}});