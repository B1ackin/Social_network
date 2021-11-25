import React from 'react';
import s from '../Navbar/Navbar.module.css';

export function Navbar() {
    return <div className={s.navbar}>
        <div>
            <a href="/profile">Profile</a>
        </div>
        <div>
            <a href="/dialogs">Messages</a>
        </div>
        <div>News</div>
        <div>Music</div>
        <div>Setting</div>
    </div>
}