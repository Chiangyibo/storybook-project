/*
    *  自定义属性有 yontype、width、yonsize; 其他属性继承 antd。
    *  
    *  默认按钮宽度最大140px、最小60px, 如果按钮宽度不在此范围内需要设置width。
    *  block 失效，可用 width="100%" 替代。
    *  
    *  yonsize="small" 为行操作按钮，高度为 22px;
    *  yonsize="middle" 为弹框按钮，高度为 26px;
    *  默认按钮，高度为 28px;
    * 
*/

/*
    yontype: ['default', 'primary', 'dark', 'light', 'link']
    yonsize: ['small', 'middle']
    width: '28px'
*/

import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.css';

const YonButton = (props) => {
    return (
        <Button
            {...props}
            className={classNames(
                'yon-btn',
                {
                    'yon-btn-default': props.yontype === 'default',
                    'yon-btn-primary': props.yontype === 'primary',
                    'yon-btn-dark': props.yontype === 'dark',
                    'yon-btn-light': props.yontype === 'light',
                    'yon-btn-link': props.yontype === 'link',
                    'no-min-width': !!props.width,
                    'yon-btn-small': props.yonsize === "small",
                    'yon-btn-middle': props.yonsize === "middle",
                }
            )}
            style={{
                width: props.width ? props.width : null,
                borderRadius: props.shape === "circle" ? "50%" : '4px'
            }}
        >
            {props.children}
        </Button>
    );
};

YonButton.propTypes = {
    yontype: PropTypes.string,
    width: PropTypes.string,
    yonsize: PropTypes.string
};

YonButton.defaultProps = {
    yontype: null,
    width: null,
    yonsize: ''
};


export default YonButton