import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import messages from './Messages.module.css';

const UsersItem = (props) => {
    let path = "/messages/" + props.name;

    return (
        <li className={messages.nameUsers__item}>
            <NavLink to={path} className={messages.nameUsers__link} activeClassName={messages.active}>{props.name}</NavLink>
        </li>
    );
}

const Message = (props) => {
    return (
        <div className={messages.dialogsWindow__dialog}>
            {props.message}
        </div>
    );
}

const Messages = (props) => {
    return (
        <div className={messages.content}>
            <ul className={messages.nameUsers}>
                <UsersItem name="Maria" />
                <UsersItem name="Nick" />
                <UsersItem name="Jhon" />
                <UsersItem name="Daniil" />
                <UsersItem name="Lara" />
            </ul>

            <div className={messages.dialogsWindow}>
                <Message message="Hi" />
                <Message message="hello" />
                <Message message="good" />
                <Message message="bye" />
                <Message message="luck" />
            </div>
        </div>
    );
}

export default Messages;