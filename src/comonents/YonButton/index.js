/*
 * @Autor: jyb
 * @Description: 
 * @LastEditTime: 2021-01-04 11:23:44
 */
import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.css';

export const YonButton = (props) => {
   
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
                }
            )}
            style={{width: props.width ? props.width : null }}
        >
            {props.children}
        </Button>
    );
};

YonButton.propTypes = {
    yontype: PropTypes.string,
    width: PropTypes.string,
};

YonButton.defaultProps = {
    yontype: 'medium',
    width: null,
};
