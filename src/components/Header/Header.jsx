import React from 'react';
import header from './Header.module.css';

const Header = () => {
    return (
        <header className={header.header}>
            <h1 className="title">
                LOGO NAME
            </h1>

            <a href="#" className={header.profile}>
                <div className={header.profile__photo}>
                    <img src="" alt=""/>
                </div>
                <div className={header.profile__nick}>Nick name</div>
            </a>
        </header>
    );
}

export default Header;