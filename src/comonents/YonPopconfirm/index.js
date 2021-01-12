
import React from 'react';
import { Popconfirm } from 'antd';

import './index.css';



const YonPopconfirm = (props) => {
    return <Popconfirm {...props}>
        {props.children}
    </Popconfirm>
}


export default YonPopconfirm;


