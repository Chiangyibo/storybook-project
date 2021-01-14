
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import YonInput from '../YonInput';
import YonModal from '../YonModal';
import YonMessage from '../YonMessage';
import _ from 'lodash';

import { GlobalOutlined } from '@ant-design/icons';
import './index.css';

const langMap = {
    "zh_CN": {
        "RPA_L_00050007": "简体中文",
        "RPA_L_00050008": "繁体中文",
        "RPA_L_00050009": "英文",
        "RPA_L_00050010": "提示: 若企业账号语言内容未维护，系统将默认按当前语言内容赋值处理",
        "RPA_L_00050011": "当前语言",
        "RPA_L_00050012": "企业账号语言",
        "RPA_L_00050013": "语言设置",
    },
    "zh_TW": {
        "RPA_L_00050007": "簡體中文",
        "RPA_L_00050008": "繁體中文",
        "RPA_L_00050009": "英文",
        "RPA_L_00050010": "提示:若企業帳號語言內容未維護，系統將預設按當前語言內容賦值處理",
        "RPA_L_00050011": "當前語言",
        "RPA_L_00050012": "企業帳號語言",
        "RPA_L_00050013": "語言設定",
    },
    "en_US": {
        "RPA_L_00050007": "Simpl. Chinese",
        "RPA_L_00050008": "Trad. Chinese",
        "RPA_L_00050009": "English",
        "RPA_L_00050010": "Tips: If the content in the enterprise language is not provided, then system will populate the content in the current language",
        "RPA_L_00050011": "Current Language:",
        "RPA_L_00050012": "Enterprise Language:",
        "RPA_L_00050013": "Language Setting",
    },
};
const locale = window.localStorage.getItem('locale') || 'zh_CN';
const sysLocale = window.localStorage.getItem('sysLocale') || 'zh_CN';
const lang = langMap[locale];

const setDefaultLocal = () => {
    window.localStorage.setItem('multiList', `[{
        "default":true,
        "displayName":"简体中文",
        "enabled":true,
        "langCode":"zh_CN",
        "langSequence":1,
        "showSequence":0
    }]`);
};

let cache = null;

const YonMultiInput = (props) => {
    const [currentLang, setCurrentLang] = useState('');
    const [sysLang, setSysLang] = useState('');
    const [visible, setVisible] = useState(false);

    const [listArr, setListArr] = useState([]);
    const [textMap, setTextMap] = useState(props.propsTextMap || {});

    const [localVal, setLocalVal] = useState((props.propsTextMap && props.propsTextMap[locale]) || '');

    // 初始化页面多语翻译
    useEffect(() => {
        // 企业语言
        switch (locale) {
            case 'zh_CN':
                setCurrentLang(lang.RPA_L_00050007)
                break;
            case 'zh_TW':
                setCurrentLang(lang.RPA_L_00050008)

                break;
            case 'en_US':
                setCurrentLang(lang.RPA_L_00050009)
                break;
            default:
                break;
        }

        switch (sysLocale) {
            case 'zh_CN':
                setSysLang(lang.RPA_L_00050007)
                break;
            case 'zh_TW':
                setSysLang(lang.RPA_L_00050008)
                break;
            case 'en_US':
                setSysLang(lang.RPA_L_00050009)
                break;
            default:
                break;
        }
    }, [])

    // 获取多语列表，并排序; 初始化textMap对象
    useEffect(() => {
        let multiList = JSON.parse(window.localStorage.getItem('multiList'));

        if (!multiList) {
            setDefaultLocal();
            multiList = JSON.parse(window.localStorage.getItem('multiList'));
        }

        let arr = [];
        let arr1 = [];
        let map = {};

        multiList.forEach((item, index) => {
            // 当前语言 、企业语言 相同时
            if (locale === sysLocale) {
                if (item.langCode === locale) {
                    arr.unshift(item);
                } else {
                    arr.push(item)
                }
            } else {
                if (item.langCode === locale) {
                    arr1[0] = item;
                } else if (item.langCode === sysLocale) {
                    arr1[1] = item;
                } else {
                    arr.push(item);
                }
            }

            if (!props.textMap) { // 新增
                map[item.langCode] = ""
            } else { // 修改
                map[item.langCode] = props.textMap[item.langCode]
            }

        })

        setListArr(arr1.concat(arr));
        setTextMap(map);
    }, [])

    // 当外部数据变化时，更新内部数据
    useEffect(() => {
        let map = _.cloneDeep(textMap);
        map[locale] = localVal;

        setTextMap(map)
        let data = {
            [props.name]: localVal,
            [props.name + 'MultiLangText']: {
                textMap
            }
        }
        props.onChange(data);
    }, [localVal]);

    const onChange = (langCode, e) => {
        let str = e.target.value;
        let map = _.cloneDeep(textMap);

        if (!langCode) { // 外部输入
            setLocalVal(str);
            map[locale] = str;
        } else {
            if (langCode === locale) {
                setLocalVal(str);
                map[locale] = str;
            } else {
                map[langCode] = str;
            }
        }
        setTextMap(map)
    }

    // 保存多语设置
    const onOk = () => {
        if (!textMap[locale]) {
            YonMessage.error("请检查必输项!")
            return;
        }
        let map = _.cloneDeep(textMap);
        if (!map[sysLocale]) {
            map[sysLocale] = map[locale];
            setTextMap(map)
        }

        let data = {
            [props.name]: localVal,
            [props.name + 'MultiLangText']: {
                textMap: map
            }
        }
        props.onChange(data);
        setVisible(false)
    }

    // 取消多语设置
    const onCancel = () => {
        setTextMap(cache)
        setLocalVal(cache[locale])
        setVisible(false)
    }
    
    const showModal = () => {
        cache = _.cloneDeep(textMap);
        setVisible(true)
    }

    const inputGlobalStyle={
        fontSize: '14px', 
        color: '#adb4bc'
    }

    const textAreaStyle={
        fontSize: '14px', 
        color: '#adb4bc',
        position: 'absolute',
        top: '6px',
        right: '11px'
    }
    return (
        <section>
            <YonInput
                style={props.style}
                label={props.label}
                type={props.type}
                required={props.required}
                placeholder='请输入...'
                value={localVal}
                onChange={onChange.bind(null, false)}
                suffix={
                    <GlobalOutlined 
                        style={props.type === 'TextArea' ? textAreaStyle : inputGlobalStyle} 
                        onClick={showModal} 
                    />
                }
            />

            <YonModal
                title={lang.RPA_L_00050013}
                visible={visible}
                onOk={onOk}
                onCancel={onCancel}
                width='600px'
                destroyOnClose={false}
                maskClosable={false}
            >
                <div className='multi-card'>
                    <div className="tip-wrap">
                        <p style={{ lineHeight: '30px' }}>
                            {lang.RPA_L_00050011}
                            <strong style={{ paddingRight: '30px' }}>{currentLang}</strong>
                            {lang.RPA_L_00050012}
                            <strong>{sysLang}</strong>
                        </p>

                        <p>{lang.RPA_L_00050010}</p>
                    </div>

                    {
                        listArr.map((item, index) => (
                            <div className="multi-item" >
                                <div className="multi-input">
                                    {
                                        <YonInput
                                            value={textMap[item.langCode]}
                                            type={props.type}
                                            onChange={onChange.bind(null, item.langCode)}
                                            key={item.langCode}
                                            required={item.langCode === locale}
                                            label={item.displayName}
                                            style={{ width: 360 }}
                                        />
                                    }

                                </div>
                            </div>
                        ))
                    }
                </div>
            </YonModal>
        </section>
    )
}

YonMultiInput.propTypes = {
    /** 例如：'name', 'description', 'note' */
    name: PropTypes.string,
    label: PropTypes.string,
    /** 设置Input的样式，如宽度 */
    style: PropTypes.object,
    /** 是否必输 */
    required: PropTypes.bool,
    /** 提供回填的数据:
     * {
     *   "zh_CN": "哈喽",
     *   "zh_TW": "哈嘍",
     *   "en_US": "hello",
     *   "fr_FR": ""
     *  }
    */
    propsTextMap: PropTypes.object,
    /** function(data) { 
     *      console.log(data); // {name: "", nameMultiLangText: {"zh_CN": ""}}
     *  } */
    onChange: PropTypes.func
};

export default YonMultiInput;


