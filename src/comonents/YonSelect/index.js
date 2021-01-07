
import React from 'react';
import { Select } from 'antd';
import './index.css';

const { Option } = Select;

const YonSelect = (props) => {
    return (
        <Select {...props}>
            {props.children}
        </Select>
    );
};

YonSelect.Option = Option;


export default YonSelect