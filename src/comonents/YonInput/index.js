
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

    return (<span className="clearfix" style={{display: props.style && props.style.width ? 'inline-block' : 'block',height:'44px'}}>
        {
            !!props.label && <span className="clearfix fl"
                style={{
                    display:'block',
                    width:'126px',
                }}
            >
                <span className={classNames('fr',{"required-star": props.required})}
                    style={{
                        paddingRight:'8px',
                        height: '28px',  
                        display: 'grid',
                        alignItems: 'center',
                        maxWidth:'122px',
                        textAlign:'right',
                        color: '#666',
                        lineHeight:'14px',
                        fontSize:'12px'
                    }}
                >
                    {props.label}
                </span>
            </span>
        }
        <span style={{position:'relative',marginBottom:'16px'}}>
            <Input {...props}/>
            <em style={{
                position:'absolute',
                left:'0',
                top:'26px',
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

YonInput.TextArea = TextArea;
YonInput.Search = Search;
YonInput.Group = Group;
YonInput.Password = Password;
YonInput.Methods = Methods;



export default YonInput