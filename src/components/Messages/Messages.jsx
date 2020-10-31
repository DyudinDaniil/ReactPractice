import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import messages from './Messages.module.css';
import UsersItem from "./UsersItem/UsersItem";
import MessagesItem from "./MessagesItem/MessagesItem";

const Messages = (props) => {
    let dialogsData = [
        {id: 1, name: 'Maria'},
        {id: 2, name: 'Nick'},
        {id: 3, name: 'Jhon'},
        {id: 4, name: 'Daniil'},
        {id: 5, name: 'Vlad'},
        {id: 6, name: 'Genry'},
        {id: 7, name: 'Tom'},
        {id: 8, name: 'Lera'},
        {id: 9, name: 'Lara'}
    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'hello'},
        {id: 3, message: 'good'},
        {id: 4, message: 'bye'},
        {id: 5, message: 'luck'}
    ]

    let dialogsElements = dialogsData.map(dialog => <UsersItem name={dialog.name} />);
    let messagesElements = messagesData.map(message => <MessagesItem message={message.message} />);

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