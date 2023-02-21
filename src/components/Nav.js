import React from "react";
import { NavLink } from "react-router-dom";
import settingIcon from '../assets/setting.png'

const Nav = () => (
    <main className="header">
        <li className="back-arrow"> <NavLink to="/">🡨</NavLink></li>
        <div className="logo">LOGO</div>
        <div className="settings"><img src={settingIcon} alt="settings" /></div>
    </main>
)

export default Nav;