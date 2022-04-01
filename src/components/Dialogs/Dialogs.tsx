import React, {ChangeEvent} from 'react';
import s from '../Dialogs/Dialogs.module.css';
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogsItem/DialogsItem";
import {DialogsPropsType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";

type DialogPropsType  = {
    updateNewMessageBody: (body:string)=> void
    sendMessage: () => void
    dialogsPage: MessagesPage
    isAuth: boolean
}

export type MessagesPage = {
    dialogs: Array<DialogsType>,
    messages: Array<MessagesType>
    newMessageBody: string
}
export type PostsType = {
    id: number,
    message: string
}

export type DialogsType = {
    id: number,
    name: string
}

export type MessagesType = {
    id?: number,
    message: string
}

export const Dialogs: React.FC<DialogPropsType> = (props) => {

    let state = props.dialogsPage

    let dialogElement = state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);
    let messageElement = state.messages.map( m => <Message id={m.id} message={m.message}/> )
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    }

    if(props.isAuth === false ) return <Redirect to={'/Login'} />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                { dialogElement }
            </div>
            <div className={s.messages}>
                { messageElement }
                <textarea value={newMessageBody}
                          onChange={onNewMessageChange}>
                </textarea>
                <div><button onClick={onSendMessageClick}>Add message</button></div>
            </div>
        </div>
    )
}

