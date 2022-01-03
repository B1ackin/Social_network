import React from 'react';
import {ActionType, MessagesPage, SendMessageTypeAC, UpdateNewMessageBodyTypeAC} from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState: MessagesPage = {
    dialogs: [
        {id: 1, name: "Valera"},
        {id: 2, name: "Igor"},
        {id: 3, name: "Kirill"},
        {id: 4, name: "Leonid"},
    ],
    messages: [
        {id: 1, message: "Hi, how are you?"},
        {id: 2, message: "Hi"},
        {id: 3, message: "Yo"},
    ],
    newMessageBody: ''
}

const dialogsReducer = (state: MessagesPage = initialState, action: ActionType): MessagesPage => {

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