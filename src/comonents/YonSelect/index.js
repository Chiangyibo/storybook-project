
import React from 'react';
import { Select } from 'antd';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import './index.css';

const lang = {
    "zh_CN":{
        "RPA_L_90000000": "必输项",
    },
    "zh_TW":{
        "RPA_L_90000000": "必輸項",
    },
    "en_US":{
        "RPA_L_90000000": "Required",
    },
}

let locale = window.localStorage.getItem('locale') || 'zh_CN';



const { Option } = Select;

const YonSelect = (props) => {
    return (<span className="clearfix" style={{display:'inline-block',height:'44px'}}>
    {
        !!props.label && <span className="clearfix fl" style={{ display:'inline-block', width:'126px' }} >
            <span className={classNames({"required-star": props.required}, 'fr', 'yon-label-style')}>
                {props.label}
            </span>
        </span>
    }
    
    <span className="fl" style={{position:'relative'}}>
        <Select {...props}>
            {props.children}
        </Select>
        <em style={{
            position:'absolute',
            left:'0',
            top:'28px',
            fontSize:'12px',
            lineHeight:'12px',
            fontStyle:'normal',
            color: '#ccc',
            visibility: props.required ? 'visible' : 'hidden'
        }}>
            {lang[locale].RPA_L_90000000}
        </em>
    </span>
</span>
        
    );
};
YonSelect.propTypes = {
    label: PropTypes.string,
    required: PropTypes.bool
};
YonSelect.Option = Option;


export default YonSelect