
import React from 'react';
import { Tabs } from 'antd';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
import './index.css';

const { TabPane } = Tabs;

const YonTabs = (props) => {
    return (
        <Tabs {...props}>
            {props.children}
        </Tabs>
    );
};

YonTabs.TabPane = TabPane;




export default YonTabs