import React from 'react';
import { storiesOf } from "@storybook/react";
import YonDropdown from '../comonents/YonDropdown';

import { Menu } from 'antd';


const Dropdown = () => {

  
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

  return <section>
    <YonDropdown overlay={menu} trigger={['click']}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          click me 
        </a>
      </YonDropdown>



  </section>
};




const note = `
  #### 注释：仅改了样式, 其他API全部继承 antd。  

`

storiesOf("#Dropdown", module).add('#Dropdown', Dropdown, { info: { text: note } });