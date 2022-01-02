import React from 'react';
import {ActionType, AddPostTypeAC, NewPostTextTypeAC, PostsType, ProfilePage} from "./state";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

export type profileReducerActionType = AddPostTypeAC | NewPostTextTypeAC

const profileReducer = (state: ProfilePage, action: ActionType)  => {
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