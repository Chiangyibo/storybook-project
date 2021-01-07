
import React from 'react';
import PropTypes from 'prop-types';
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


YonSelect.propTypes = {
    /** 只修改了样式，属性全部继承 antd */
    props: PropTypes.string
};

export default YonSelect