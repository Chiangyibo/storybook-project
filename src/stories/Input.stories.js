import React, { useState } from 'react';
import { storiesOf } from "@storybook/react";
import { action } from '@storybook/addon-actions'
import YonInput from '../comonents/YonInput';


const InputSet = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [password1, setPassword1] = useState('');


  return (<section>
        <YonInput 
          value={phone} 
          onChange={(e)=>{setPhone(e.target.value)}} 
          placeholder="label、rule、errormsg、style.width='300px'" 
          label="有标题|有校验|有必输项|有宽度" 
          rule="^\d{11}$" 
          errormsg="您输入的手机号有误！" 
          required  
          style={{width:'300px'}}
        />
        
        <YonInput 
          value={password} 
          onChange={(e)=>{setPassword(e.target.value)}} 
          placeholder="label、rule、errormsg、style.width='300px'" 
          label="有标题|有校验|有宽度" 
          rule="^\d{6}$" 
          errormsg="您输入的密码有误！" 
          onPressEnter={()=>{console.log(password)}}
          style={{width:'300px'}}
        />
       
        <YonInput 
          placeholder="label、style.width='300px' "  
          label="有标题|有宽度"  
          style={{width:'300px'}}
        />

        <YonInput placeholder="默认" required/>

        <YonInput placeholder="style.width='400px' type='TextAre'"  type="TextArea" style={{width:'400px'}} />

        <YonInput placeholder="type='TextArea'"  type="TextArea" />
        <YonInput placeholder="type='TextArea'" required  type="TextArea"/>

        <YonInput placeholder="style.height='100px' type='TextArea'" type="TextArea" style={{height:'100px'}} required/>


        <YonInput 
          value={phone} 
          onChange={(e)=>{setPhone(e.target.value)}} 
          placeholder="label、rule、errormsg、style.width='300px'" 
          label="有标题|有校验|有必输项|有宽度" 
          rule="^\d{11}$" 
          errormsg="您输入的手机号有误！" 
          required  
          style={{width:'300px'}}
          type="TextArea"
        />
        
        <YonInput 
          value={password} 
          onChange={(e)=>{setPassword(e.target.value)}} 
          placeholder="label、rule、errormsg、style.width='300px'" 
          label="有标题|有校验|有宽度" 
          rule="^\d{6}$" 
          errormsg="您输入的密码有误！" 
          onPressEnter={()=>{console.log(password)}}
          style={{width:'300px'}}
          type="TextArea"
        />
       
        <YonInput 
          placeholder="label、style.width='300px' "  
          label="有标题|有宽度"  
          style={{width:'300px'}}
          type="TextArea"
        />
       
    </section>)


}





const note = `
  #### 注释：添加了4个 API: label、required、rule、errormsg, 其他 API 全部继承 antd。
  * rule 为校验规则，仅支持正则表达式，例如：'^\\d{11}$'
  * errormsg 为校验规则不满足时显示的错误提示信息
  * label 输入框前的标题
  * required 是否为必输项
`

storiesOf("Input", module).add('Input', InputSet, {info:{text: note}});