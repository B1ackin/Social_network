import React from 'react';
import s from '../Navbar/Navbar.module.css';

export function Navbar() {
    return <div className={s.navbar}>
        <div>Profile</div>
        <div>Messages</div>
        <div>News</div>
        <div>Music</div>
        <div>Setting</div>
    </div>
}