import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Header/Header.module.css';
import logo from '../../img/social-network.png'

type PropsType = {
    isAuth: boolean
    login: string | null
}


export function Header(props: PropsType) {
    return <div className={s.header}>
    <div className={s.headerTop}>
        <div className={s.logo}>
            <img src={logo} alt=""/>
        </div>
        <div className={s.login}>
            {props.isAuth ? props.login : <NavLink to={'/login'}>Вход</NavLink>}

        </div>
    </div>
    </div>
}

