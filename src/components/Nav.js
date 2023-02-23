import React from 'react';
import { NavLink } from 'react-router-dom';
import settingIcon from '../assets/settings.jpg';
import logo from '../assets/logo.jpg';

const Nav = () => (
  <main className="header">
    <li className="back-arrow">
      {' '}
      <NavLink to="/">🡨</NavLink>
    </li>
    <div className="logo"><img className="logo-img" src={logo} alt="logo" /></div>
    <div className="settings"><img className="settings-img" src={settingIcon} alt="settings" /></div>
  </main>
);

export default Nav;
