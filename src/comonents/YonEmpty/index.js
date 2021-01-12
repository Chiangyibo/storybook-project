
import React from 'react';
import nullImage from './img/null.png';

const lang = {
  "zh_CN":{
      "RPA_L_90000000": "暂无数据",
  },
  "zh_TW":{
      "RPA_L_90000000": "暫無數據",
  },
  "en_US":{
      "RPA_L_90000000": "No data",
  },
}

let locale = window.localStorage.getItem('locale') || 'zh_CN';

const YonEmpty = () => {
    return <div style={{ textAlign: 'center' }}>
      <img src={nullImage} width="80" height="80" />
      <p style={{lineHeight:'28px'}}>{lang[locale].RPA_L_90000000}</p>
    </div>
  
}
export default YonEmpty;
