
import React from 'react';
import { Modal } from 'antd';
import YonButton from '../YonButton';
import PropTypes from 'prop-types';
import './index.css';

const { info, success, error, warning } = Modal;

const YonModal = (props) => {
    const footBtn = props.footer ? props.footer : [];
    return <Modal {...props}
        closeIcon={<i className="iconfont iconshanchu-danse-hong-EE2223" style={{ fontSize: '12px' }}></i>}
        footer={[
            ...footBtn,
            <YonButton yontype="primary" style={{ float: 'right' }} onClick={props.onOk}>确定</YonButton>,
            <YonButton yontype="light" style={{ float: 'right' }} onClick={props.onCancel}>取消</YonButton>,
        ]}
    >
        {props.children}
    </Modal>
}

YonModal.info = info;
YonModal.success = success;
YonModal.error = error;
YonModal.warning = warning;

const Confirm = (props) => {
    return <Modal {...props}
        title={null}
        closeIcon={<i></i>}
        footer={null}
        width="420px"
    >
        <div className="yon-modal-confirm-wrap">
            <span className="yon-modal-confirm-icon">
                {
                    props.icon ? props.icon : <i className="iconfont iconjingshitubiao-huangsetianchong"></i>
                }
            </span>
            <div className="yon-modal-confirm-content">
                <h2 style={{height:'26px',fontSize:'16px',fontWeight:'600'}}>{props.text}</h2>

                <div style={{maxHeight:'104px',overflow:'auto'}}>
                    {props.children}
                </div>
                <div className="yon-modal-confirm-btns clearfix">
                    <YonButton yontype="primary" style={{ float: 'right' }} onClick={props.onOk} className="fr">确定</YonButton>
                    <YonButton yontype="light" style={{ float: 'right' }} onClick={props.onCancel} className="fr">取消</YonButton>
                </div>
            </div>
        </div>
    </Modal>
};

YonModal.Confirm = Confirm;

YonModal.propTypes = {
    /** 这是使用Modal封装成的confirm组件。
     * 新增的API: 'icon', 'text'。
     * 删除的API: 'title', 'footer', 'width'。
     * 其他API继承antd。
     *  */
    Confirm: PropTypes.object,
};

export default YonModal;
