import React from 'react';
import messages from './Messages.module.css';

const Messages = (props) => {
    return (
        <div className={messages.content}>
            <ul className={messages.nameUsers}>
                <li className={messages.nameUsers__item}>
                    Maria
                </li>
                <li className={messages.nameUsers__item}>
                    Nick
                </li>
                <li className={messages.nameUsers__item}>
                    Jhon
                </li>
                <li className={messages.nameUsers__item}>
                    Daniil
                </li>
                <li className={messages.nameUsers__item}>
                    Lara
                </li>
            </ul>

            <div className={messages.dialogsWindow}>
                <div className={messages.dialogsWindow__dialog}>
                    welcome
                </div>
                <div className={messages.dialogsWindow__dialog}>
                    hello
                </div>
                <div className={messages.dialogsWindow__dialog}>
                    good
                </div>
                <div className={messages.dialogsWindow__dialog}>
                    bye
                </div>
                <div className={messages.dialogsWindow__dialog}>
                    luck
                </div>
            </div>
        </div>
    );
}

export default Messages;