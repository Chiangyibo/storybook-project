
import { message } from 'antd';
import './index.css';

let YonMessage = {...message};

YonMessage.success = (content, duration, onClose) => {
    return message.success({
        content,
        duration,
        onClose,
        className: 'yon-message-success',
    })
}

YonMessage.warn = (content, duration, onClose) => {
    return message.warn({
        content,
        duration,
        onClose,
        className: 'yon-message-warn'
    })
}

YonMessage.error = (content, duration, onClose) => {
    return message.error({
        content,
        duration,
        onClose,
        className: 'yon-message-error'
    })
}

YonMessage.info = (content, duration, onClose) => {
    return message.info({
        content,
        duration,
        onClose,
        className: 'yon-message-info'
    })
}


export default YonMessage;


