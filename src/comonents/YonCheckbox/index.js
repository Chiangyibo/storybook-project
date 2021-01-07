
import React from 'react';
import { Checkbox } from 'antd';
import './index.css';

const { Group } = Checkbox;

const YonCheckbox = (props) => {
    return (
        <Checkbox {...props}>
            {props.children}
        </Checkbox>
    );
};


YonCheckbox.Group = Group;


export default YonCheckbox