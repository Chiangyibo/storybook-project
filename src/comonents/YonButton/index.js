import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.css';

const { Group } = Button;

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
    /** 可选值：'default', 'primary', 'dark', 'light', 'link' */
    yontype: PropTypes.string,
    /** 
     * 默认按钮设置了 max-width: '140px'; min-width: '60px'; 
     * 如果按钮宽度不在此范围内需要设置 width 属性。 
     * */
    width: PropTypes.string,
    /** 
     * 可选值：'small', 'middle'; 
     * 默认按钮，高度为 28px; 
     * yonsize="small" 为行操作按钮，高度为 22px; 
     * yonsize="middle" 为弹框按钮，高度为 26px; 
     * */
    yonsize: PropTypes.string
};



YonButton.Group = Group;
export default YonButton