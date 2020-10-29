import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import messages from './../Messages.module.css';

const UsersItem = (props) => {
    let path = "/messages/" + props.name;

    return (
        <li className={messages.nameUsers__item}>
            <NavLink to={path} className={messages.nameUsers__link} activeClassName={messages.active}>{props.name}</NavLink>
        </li>
    );
}

export default UsersItem;