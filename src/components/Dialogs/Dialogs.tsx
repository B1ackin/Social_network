import React, {ChangeEvent} from 'react';
import s from '../Dialogs/Dialogs.module.css';
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogsItem/DialogsItem";
import {
    StoreType,
} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";

type DialogPropsType  = {
    store: StoreType
}


export function Dialogs(props: DialogPropsType) {

    let state = props.store.getState().dialogsPage

    let dialogElement = state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);
    let messageElement = state.messages.map( m => <Message id={m.id} message={m.message}/> )
    let newMessageBody = state.newMessageBody

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyAC(body))
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

