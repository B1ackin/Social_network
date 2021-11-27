import React from 'react';
import s from '../Dialogs/Dialogs.module.css';
import {NavLink} from "react-router-dom";


type DialogPropsType = {
    id: number,
    name: string
}
type MessagePropsType = {
    id: number
    message: string
}


export function DialogItem(props: DialogPropsType) {


    let path = "/dialogs/" + props.id;

    return (

        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
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

    let dialogsData: Array<DialogPropsType> = [
        {id: 1, name: "Valera"},
        {id: 2, name: "Igor"},
        {id: 3, name: "Kirill"},
        {id: 4, name: "Leonid"},
    ]

    let messageData: Array<MessagePropsType> = [
        {id: 1, message: "Hi, how are you?"},
        {id: 2, message: "Hi"},
        {id: 3, message: "Yo"},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem id={dialogsData[0].id} name={dialogsData[0].name}/>
                <DialogItem id={dialogsData[1].id} name={dialogsData[1].name}/>
                <DialogItem id={dialogsData[2].id} name={dialogsData[2].name}/>
                <DialogItem id={dialogsData[3].id} name={dialogsData[3].name}/>


            </div>
            <div className={s.messages}>
                <Message id={messageData[0].id} message={messageData[0].message}/>
                <Message id={messageData[1].id} message={messageData[1].message}/>
                <Message id={messageData[2].id} message={messageData[2].message}/>


            </div>
        </div>
    )
}

