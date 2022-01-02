import React from 'react';
import {ActionType, MessagesPage, SendMessageTypeAC, UpdateNewMessageBodyTypeAC} from "./state";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'


export type DialogsReducerActionType = UpdateNewMessageBodyTypeAC | SendMessageTypeAC


const dialogsReducer = (state: MessagesPage, action: ActionType) => {

switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
        state.newMessageBody = action.body
        return state
    case SEND_MESSAGE:
        let body = state.newMessageBody
        state.newMessageBody = ''
        state.messages.push({id: 4, message: body})
        return state
    default:
        return state
    }


}

export const updateNewMessageBodyAC = (body: string): UpdateNewMessageBodyTypeAC => ({
    type: 'UPDATE-NEW-MESSAGE-BODY',
    body: body
})
export const sendMessageAC = (): SendMessageTypeAC => ({type: 'SEND-MESSAGE'})

export default dialogsReducer;