import React from 'react';
import {StoreType,} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";

type DialogPropsType  = {
    store: StoreType
}


export function DialogsContainer(props: DialogPropsType) {

    let state = props.store.getState().dialogsPage

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }

    const onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyAC(body))
    }

    return <Dialogs
                    updateNewMessageBody={onNewMessageChange}
                    dialogsPage={state}
                    sendMessage={onSendMessageClick}
    />
}

