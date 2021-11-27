import React from 'react';
import s from '../Dialogs/Dialogs.module.css';
import {NavLink} from "react-router-dom";

export function Dialogs() {
    return (
        <div className={s.dialogs}>
        <div className={s.dialogsItem}>
            <div className={s.dialog}>
                 <NavLink to="/dialogs/1">Valera</NavLink>
            </div>
            <div className={s.dialog + ' ' + s.active}>
                <NavLink to="/dialogs/2">Igor</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to="/dialogs/3">Misha</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to="/dialogs/4">Kirill</NavLink>
            </div>
        </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hi, how are you?
                </div>
                <div className={s.message}>
                    Hi, how are you?
                </div>
                <div className={s.message}>
                    Hi, how are you?
                </div>
            </div>
    </div>
    )
}

