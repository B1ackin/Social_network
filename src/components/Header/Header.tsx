import React from 'react';
import s from '../Header/Header.module.css';

export function Header() {
    return <div className={s.header}>
    <div className={s.headerTop}>
        <div className={s.logo}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/VK_Full_Logo.svg" alt=""/>
        </div>
        <div className="login">
            Вход
        </div>
    </div>
    </div>
}

