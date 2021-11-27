import React from 'react';
import s from '../Dialogs/Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    id: string,
    name: string
}
type MessagePropsType = {
    message: string
}

export function Dialog(props: DialogPropsType) {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}


export function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <Dialog id="1" name="Valera"/>
                <Dialog id="2" name="Igor"/>
                <Dialog id="3" name="Kirill"/>
                <Dialog id="4" name="Leonid"/>

            </div>
            <div className={s.messages}>
                <Message message="Hi, how are you?"/>
                <Message message="Hi"/>
                <Message message="Yo"/>

            </div>
        </div>
    )
}

