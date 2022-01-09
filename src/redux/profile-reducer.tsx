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
        case ADD_POST: {

                let newPost: PostsType = {
                    id: 5,
                    message: state.newPostText,
                }
                let stateCopy = {...state}
                stateCopy.posts = [...state.posts]
                stateCopy.posts.push(newPost);
                stateCopy.newPostText = '';
                return stateCopy;
            }



        case UPDATE_NEW_POST_TEXT:{
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
        }
        default:
            return state



    }
}

export const addPostAC = (): AddPostTypeAC => ({type: ADD_POST})

export const updateNewPostTextAC = (text: string): NewPostTextTypeAC => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})


export default profileReducer;