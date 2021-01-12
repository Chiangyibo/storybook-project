import React, { useState } from 'react';
import { storiesOf } from "@storybook/react";
import YonModal from '../comonents/YonModal';
import YonButton from '../comonents/YonButton';

const { Confirm } = YonModal;

const Modal = () => {
  const [visibleModal, setVisibleModal] = useState(false)
  const [visibleConfirm, setVisibleConfirm] = useState(false)

  return <section>
    <YonButton yontype="primary" onClick={() => setVisibleModal(true)}>Modal</YonButton>
    <YonButton yontype="default" onClick={() => setVisibleConfirm(true)}>Confirm</YonButton>




    <YonModal
      title="Basic Modal"
      visible={visibleModal}
      onOk={() => setVisibleModal(false)}
      onCancel={() => setVisibleModal(false)}
      footer={[<YonButton yontype="default" className="fl" onClick={() => setVisibleModal(false)}>取消1</YonButton>]}
      bodyStyle={{
        height: '300px'
      }}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </YonModal>



    <Confirm
      text="标题text啊"
      visible={visibleConfirm}
      onOk={() => setVisibleConfirm(false)}
      onCancel={() => setVisibleConfirm(false)}
      icon={<i className="iconfont iconxinxitubiao-lansetianchong"></i>}
    >
      一些附加信息一些附加信息一些附加信息一些附加信息一些附加信息一些附加信息一些附加信息一些附加信息一些附加信息一些附加信息一些附加信息一些附加信息一些附加信息一些附加信息一些附加信息一些附加信息一些附加信息一些附加信息一些附加信息一些附加信息一些附加信息
    </Confirm>

  </section>
};




const note = `
  ### 注释
  success、error、warn、info 全部继承 antd，仅改了样式。  
    重新封装了Confirm组件。 
  * 新增的API: icon, text。【图标、标题】
  * 删除的API: title, footer, width。
  * Confirm 的其他API继承antd。
`

storiesOf("Modal", module).add('Modal', Modal, { info: { text: note } });