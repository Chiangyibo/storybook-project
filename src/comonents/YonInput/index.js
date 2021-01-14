
import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
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


const { TextArea, Search, Group, Password, Methods } = Input

const YonInput = (props) => {
    const [errorState, setErrorState] = useState(false);
    const [errormsg, setErrormsg] = useState('');
    const [tipColor, setTipColor] = useState('#ccc');

 
    useEffect(() => {
        if(props.required) {
            setErrormsg(lang[locale].RPA_L_90000000)
        }

        if(props.value === undefined || props.value.trim().length === 0) { // 没有设置 value 或者为空时
            setErrorState(true);
            setTipColor('#ccc')

            if(props.required) {
                setErrormsg(lang[locale].RPA_L_90000000)
            } else {
                setErrormsg('')
            }
        } else {
            if(props.rule && props.errormsg) {
                let reg = new RegExp(props.rule)
                let isOk = reg.test(props.value)
                
                if(isOk) {
                    setErrormsg('')
                    setErrorState(false)
                } else {
                    setErrormsg(props.errormsg)
                    setErrorState(true);
                    setTipColor('#ee2223')
                }
                
            }
        }
    }, [props.value])

    const wrapStyle = {
        display: props.style && props.style.width ? 'inline-block' : 'block',
        height: props.type==="TextArea" ? '46px' : '44px'
    };

    return (<span className="clearfix" style={wrapStyle}>
        {
            !!props.label && <span className="clearfix fl"
                style={{
                    display:'block',
                    width:'126px',
                }}
            >
                <span className={classNames({"required-star": props.required}, 'fr', 'yon-label-style')}>
                    {props.label}
                </span>
            </span>
        }
        <span style={{position:'relative',marginBottom:'16px'}}>
            {
                props.type === "TextArea"
                ? <span style={{ position:'relative',display:'inline-block' }}>
                    <TextArea {...props} autoSize={false} ></TextArea> 
                    {props.suffix}
                </span>
                : <Input {...props} />
            }
            <em style={{
                position:'absolute',
                left:'0',
                top: props.type==="TextArea" ? '20px' : '26px',
                fontSize:'12px',
                lineHeight:'12px',
                color: tipColor,
                fontStyle:'normal',
                visibility: props.required || errorState ? 'visible' : 'hidden'
            }}>
                {errormsg}
            </em>
        </span>
    </span>);
};
YonInput.propTypes = {
    label: PropTypes.string,
    /** 校验规则：例如 '^\d{11}$' */
    rule: PropTypes.string,
    /** 设置rule时要为其设置错误提示信息errormsg */
    errormsg: PropTypes.string,
    required: PropTypes.bool
};


YonInput.Search = Search;
YonInput.Group = Group;
YonInput.Password = Password;
YonInput.Methods = Methods;



export default YonInput