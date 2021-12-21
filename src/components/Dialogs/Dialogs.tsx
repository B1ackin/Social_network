import React from 'react';
import s from '../Dialogs/Dialogs.module.css';
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogsItem/DialogsItem";
import state, {DialogsType, MessagesPage, MessagesType} from "../../redux/state";

type DialogPropsType  = {
    state: MessagesPage
}




export function Dialogs(props: DialogPropsType) {

    let dialogElement = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);
    let messageElement = props.state.messages.map( m => <Message id={m.id} message={m.message}/> )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                { dialogElement }
            </div>
            <div className={s.messages}>
                { messageElement }
                <textarea></textarea>
                <div><button>add message</button></div>

            </div>
        </div>
    )
}

