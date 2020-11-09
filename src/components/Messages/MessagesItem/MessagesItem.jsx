import React from 'react';
import messages from './../Messages.module.css';

const MessagesItem = (props) => {
    return (
        <div className={messages.dialogsWindow__dialog}>
            <span>{props.message}</span>
        </div>
    );
}

export default MessagesItem;