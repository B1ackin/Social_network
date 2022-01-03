import React from 'react';
import {ActionType, AddPostTypeAC, NewPostTextTypeAC, PostsType, ProfilePage} from "./store";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialState: ProfilePage = {
    posts: [
        {id: 1, message: "Hi, how are you?"},
        {id: 2, message: "Hi, this is my first post"},
        {id: 3, message: "Yo yo yo"}

    ],
    newPostText: 'it-kamasutra'
}

const profileReducer = (state: ProfilePage = initialState, action: ActionType): ProfilePage  => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostsType = {
                id: 5,
                message: state.newPostText
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostAC = (): AddPostTypeAC => ({type: 'ADD-POST'})

export const updateNewPostTextAC = (text: string): NewPostTextTypeAC => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newText: text
})


export default profileReducer;