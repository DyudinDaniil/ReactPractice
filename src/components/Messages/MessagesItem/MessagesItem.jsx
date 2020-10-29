import React from 'react';
import messages from './../Messages.module.css';

const MessagesItem = (props) => {
    return (
        <div className={messages.dialogsWindow__dialog}>
            {props.message}
        </div>
    );
}

export default MessagesItem;