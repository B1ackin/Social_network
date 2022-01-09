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
    newMessageBody: '1'
}

const dialogsReducer = (state: MessagesPage = initialState, action: ActionType): MessagesPage => {
switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
        let stateCopy = {...state}
        stateCopy.newMessageBody = action.body
        return stateCopy
    }
    case SEND_MESSAGE:
        let stateCopy = {...state}
        let body = stateCopy.newMessageBody
        stateCopy.newMessageBody = ''
        stateCopy.messages = [...state.messages]
        stateCopy.messages.push({id: 4, message: body})
        return stateCopy
    default:
        return state
    }
}

export const updateNewMessageBodyAC = (body: string): UpdateNewMessageBodyTypeAC => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})
export const sendMessageAC = (): SendMessageTypeAC => ({type: SEND_MESSAGE})

export default dialogsReducer;