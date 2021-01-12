
import React from 'react';
import { Dropdown } from 'antd';
import './index.css';

const YonDropdown  = (props) => {
    return (
        <Dropdown {...props}>
            {props.children}
        </Dropdown>
    );
};


YonDropdown.Button = Dropdown.Button


export default YonDropdown;