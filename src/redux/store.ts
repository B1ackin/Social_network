import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

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

export type ProfilePage = {
    posts: Array<PostsType>
    newPostText: string
}

export type MessagesPage = {
    dialogs: Array<DialogsType>,
    messages: Array<MessagesType>
    newMessageBody: string
}

export type StateType = {
    profilePage: ProfilePage,
    dialogsPage: MessagesPage,
}

export type StoreType = {
    _state: StateType,
    _callSubcriber: (_state: StateType) => void,
    subscriber: (observer: (state: StateType) => void) => void,
    getState: () => StateType
    dispatch: (action: ActionType) => void

}
export type UpdateNewMessageBodyTypeAC = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    body: string
}
export type SendMessageTypeAC = {
    type: 'SEND-MESSAGE'
}
export type AddPostTypeAC = {
    type: "ADD-POST"
}
export type NewPostTextTypeAC = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type ActionType = UpdateNewMessageBodyTypeAC | SendMessageTypeAC | AddPostTypeAC | NewPostTextTypeAC

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?"},
                {id: 2, message: "Hi, this is my first post"},
                {id: 3, message: "Yo yo yo"}

            ],
            newPostText: 'it-kamasutra'
        },
        dialogsPage: {
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

    },
    _callSubcriber() {
        console.log('state changed')
    },
    getState() {
        return this._state
    },
    subscriber (observer) {
        this._callSubcriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubcriber(this._state)
    }

}



export default store;