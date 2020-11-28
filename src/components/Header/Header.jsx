import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import header from './Header.module.css';

const Header = () => {
    return (
        <header className={header.header}>
            <h1 className="title">
                LOGO NAME
            </h1>

            <NavLink to="/profile" className={header.profile}>
                <div className={header.profile__photo}>
                    <img src="" alt=""/>
                </div>
                <div className={header.profile__nick}>Nick name</div>
            </NavLink>
        </header>
    );
}

export default Header;