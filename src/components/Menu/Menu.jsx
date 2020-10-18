import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import menu from './Menu.module.css';

const Menu = () => {
    return (
        <nav className={menu.menu}>
          <ul className={menu.list}>
            <li className={menu.item}>
              <NavLink to="/profile" className={menu.link} activeClassName={menu.active}>Profile</NavLink>
            </li>
            <li className={menu.item}>
              <NavLink to="/news" className={menu.link} activeClassName={menu.active}>News</NavLink>
            </li>
            <li className={menu.item}>
              <NavLink to="/messages" className={menu.link} activeClassName={menu.active}>Messages</NavLink>
            </li>
            <li className={menu.item}>
              <NavLink to="/teams" className={menu.link} activeClassName={menu.active}>Teams</NavLink>
            </li>
            <li className={menu.item}>
              <NavLink to="/music" className={menu.link} activeClassName={menu.active}>Music</NavLink>
            </li>
          </ul>
        </nav>
    );
}

export default Menu;