
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


const { TextArea, Search, Group, Password, Methods } = Input;

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

            props.required ? setErrormsg(lang[locale].RPA_L_90000000) : setErrormsg('')
            
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
    }, [props.value]);

    const wrapStyle = {
        display: props.style && props.style.width ? 'inline-block' : 'block',
        height: props.type==="TextArea" ? (
            props.style && props.style.height ? props.style.height : '64px'
            ) : '44px',
        marginBottom: props.style && props.style.height ? '16px' : '0'
    };


    return (<span className="clearfix" style={wrapStyle}>
        {
            !!props.label && <span className="clearfix fl" style={{ display:'block', width:'126px' }} >
                <span className={classNames({"required-star": props.required}, 'fr', 'yon-label-style')}>
                    {props.label}
                </span>
            </span>
        }
        
        <span style={{position:'relative'}}>
            {
                props.type === "TextArea"
                ? <span style={{position:'relative'}}>
                    <TextArea 
                        {...props} 
                        autoSize={false} 
                    ></TextArea> 
                    {props.suffix}
                </span>
                : <Input {...props} suffix={props.suffix}/>
            }
            
            <em style={{
                position:'absolute',
                left:0,
                right:0,
                fontSize:'12px',
                line:'12px',
                lineHeight:'12px',
                fontStyle:'normal',
                color: tipColor,
                visibility: props.required || errorState ? 'visible' : 'hidden',
                display:'block',
                zIndex:10000
            }}>
                {errormsg}
            </em>
        </span>
    </span>);
};
YonInput.propTypes = {
    label: PropTypes.string,
    rule: PropTypes.string,
    errormsg: PropTypes.string,
    required: PropTypes.bool
};


YonInput.Search = Search;
YonInput.Group = Group;
YonInput.Password = Password;
YonInput.Methods = Methods;



export default YonInput