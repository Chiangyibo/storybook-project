/* 
  total 【必选】
  onChange 【必选】
  onShowSizeChange 【必选】
  pageSizeOptions 【可选】
  fixedbottom 【可选】
*/



import React from 'react';
import { Pagination, ConfigProvider } from 'antd';

import zhCN from 'antd/es/locale-provider/zh_CN';
import zhTW from 'antd/es/locale-provider/zh_TW';
import enUS from 'antd/es/locale-provider/en_US';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.css';
const antLangMap = {
	'zh_CN': zhCN,
	'zh_TW': zhTW,
	'en_US': enUS
};

const lang = {
    "zh_CN":{
        "RPA_L_90000000": "共",
        "RPA_L_90000001": "条",
    },
    "zh_TW":{
        "RPA_L_90000000": "共",
        "RPA_L_90000001": "條",
    },
    "en_US":{
        "RPA_L_90000000": "Total",
        "RPA_L_90000001": "Item",
    },
}

let locale = window.localStorage.getItem('locale') || 'zh_CN';


const YonPagination = (props) => {
    let pageSizeOptions = props.pageSizeOptions ? props.pageSizeOptions : [10, 20, 50, 100];

    return <ConfigProvider locale={antLangMap[locale]}>
        <div className={ classNames('yon-pagination-wrap', { "yon-fixed-bottom-pagination": props.fixedbottom }) } >
            <Pagination
                showSizeChanger
                showQuickJumper
                size='small'
                showTotal={total => `${lang[locale].RPA_L_90000000} ${total} ${lang[locale].RPA_L_90000001}`}
                total={props.total}
                onChange={props.onChange}
                onShowSizeChange={props.onShowSizeChange}
                pageSizeOptions={pageSizeOptions}
                defaultPageSize={pageSizeOptions[0]}
            />
        </div>
    </ConfigProvider>
};

YonPagination.propTypes = {
    fixedbottom: PropTypes.bool,
    total: PropTypes.number,
    onChange: PropTypes.func,
    onShowSizeChange: PropTypes.func,
    pageSizeOptions: PropTypes.array
};

YonPagination.defaultProps = {
    fixedbottom: false,
    total: null,
    onChange: null,
    onShowSizeChange: null,
    pageSizeOptions: [10, 20, 50, 100]
};
export default YonPagination;
