import React, {ChangeEvent} from 'react';
import s from '../Dialogs/Dialogs.module.css';
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogsItem/DialogsItem";
import {MessagesPage,} from "../../redux/store";
import {DialogsPropsType} from "./DialogsContainer";

type DialogPropsType  = {
    updateNewMessageBody: (body:string)=> void
    sendMessage: () => void
    dialogsPage: MessagesPage
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

