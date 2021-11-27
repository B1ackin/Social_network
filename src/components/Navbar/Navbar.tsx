import React from 'react';
import s from '../Navbar/Navbar.module.css';
import {NavLink} from "react-router-dom";

export function Navbar() {
    return <div className={s.navbar}>
        <div>
            <NavLink to="/profile">Profile</NavLink>
        </div>
        <div>
            <NavLink to="/dialogs">Messages</NavLink>
        </div>
        <div>News</div>
        <div>Music</div>
        <div>Setting</div>
    </div>
}