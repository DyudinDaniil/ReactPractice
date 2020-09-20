import React from 'react';
import menu from './Menu.module.css';

const Menu = () => {
    return (
        <nav className={menu.menu}>
          <ul className={menu.list}>
            <li className={menu.item}>
              <a href="#" className={menu.link}>Profile</a>
            </li>
            <li className={menu.item}>
              <a href="#" className={menu.link}>News</a>
            </li>
            <li className={menu.item}>
              <a href="#" className={menu.link}>Messages</a>
            </li>
            <li className={menu.item}>
              <a href="#" className={menu.link}>Teams</a>
            </li>
            <li className={menu.item}>
              <a href="#" className={menu.link}>Music</a>
            </li>
          </ul>
        </nav>
    );
}

export default Menu;