import React from 'react';
import { storiesOf } from "@storybook/react";
import YonPagination from '../comonents/YonPagination';


const options = [4,8,12,16,64]

const total = () => <>
    <YonPagination total={89} />
</>;
const pageSizeOptions = () => <>
    <YonPagination total={89} pageSizeOptions={options}/>
</>;
const fixedbottom = () => <>
    <YonPagination total={89} fixedbottom/>
</>;






storiesOf("Pagination", module)
  .add('total', total)
  .add('pageSizeOptions', pageSizeOptions)
  .add('fixedbottom', fixedbottom);