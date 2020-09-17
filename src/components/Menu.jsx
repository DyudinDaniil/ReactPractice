import React from 'react';

const Menu = () => {
    return (
        <nav className="menu">
          <ul className="menu__list">
            <li className="menu__list-item">
              <a href="#" className="menu__list-item-link">Profile</a>
            </li>
            <li className="menu__list-item">
              <a href="#" className="menu__list-item-link">News</a>
            </li>
            <li className="menu__list-item">
              <a href="#" className="menu__list-item-link">Messages</a>
            </li>
            <li className="menu__list-item">
              <a href="#" className="menu__list-item-link">Teams</a>
            </li>
            <li className="menu__list-item">
              <a href="#" className="menu__list-item-link">Music</a>
            </li>
          </ul>
        </nav>
    );
}

export default Menu;