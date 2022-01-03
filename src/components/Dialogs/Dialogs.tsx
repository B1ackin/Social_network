import React, {ChangeEvent} from 'react';
import s from '../Dialogs/Dialogs.module.css';
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogsItem/DialogsItem";
import {MessagesPage,} from "../../redux/store";

type DialogPropsType  = {
    updateNewMessageBody: (body:string)=> void
    sendMessage: ()=>void
    dialogsPage: MessagesPage
}


export function Dialogs(props: DialogPropsType) {

    let state = props.dialogsPage

    let dialogElement = state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);
    let messageElement = state.messages.map( m => <Message id={m.id} message={m.message}/> )
    let newMessageBody = state.newMessageBody

    const onSendMessageClick = () => {
        props.sendMessage()
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                { dialogElement }
            </div>
            <div className={s.messages}>
                { messageElement }
                <textarea value={newMessageBody} onChange={onNewMessageChange}></textarea>
                <div><button onClick={onSendMessageClick}>Add message</button></div>
            </div>
        </div>
    )
}

