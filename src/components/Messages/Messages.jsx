import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import messages from './Messages.module.css';
import UsersItem from "./UsersItem/UsersItem";
import MessagesItem from "./MessagesItem/MessagesItem";

const Messages = (props) => {
    let dialogsElements = props.state.dialogsData.map(dialog => <UsersItem name={dialog.name} />);
    let messagesElements = props.state.messagesData.map(message => <MessagesItem message={message.message} />);

    return (
        <div className={messages.content}>
            <ul className={messages.nameUsers}>
                {dialogsElements}
            </ul>

            <div className={messages.dialogsWindow}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Messages;