import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <h1 className="header__title">
                LOGO NAME
            </h1>

            <a href="#" className="header__profile">
                <div className="header__profile-photo">
                    <img src="" alt=""/>
                </div>
                <div className="header__profile-nick">Nick name</div>
            </a>
        </header>
    );
}

export default Header;