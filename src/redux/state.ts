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
}

export type MessagesPage = {
    dialogs: Array<DialogsType>,
    messages: Array<MessagesType>
}

export type RootStateType = {
    profilePage: ProfilePage,
    dialogsPage: MessagesPage,
}

let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?"},
            {id: 2, message: "Hi, this is my first post"},
            {id: 3, message: "Yo yo yo"}

        ]
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
]
    }

}


export default state;