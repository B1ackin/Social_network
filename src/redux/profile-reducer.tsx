import React from 'react';
import {ProfileType} from "../components/Profile/Profile";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = 'SET_USER_PROFILE'

export type PostsType = {
    id: number,
    message: string
}

export type ProfilePage = {
    posts: Array<PostsType>
    newPostText: string
    profile: ProfileType | null
}

export type AddPostTypeAC = {
    type: "ADD-POST"
}
export type NewPostTextTypeAC = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export type SetUserProfileTypeAC = {
    type: 'SET_USER_PROFILE'
    profile: ProfileType
}

type ActionType = AddPostTypeAC | NewPostTextTypeAC | SetUserProfileTypeAC

let initialState: ProfilePage = {
    posts: [
        {id: 1, message: "Hi, how are you?"},
        {id: 2, message: "Hi, this is my first post"},
        {id: 3, message: "Yo yo yo"}

    ],
    newPostText: 'it-kamasutra',
    profile: null as ProfileType | null
}


const profileReducer = (state: ProfilePage = initialState, action: ActionType): ProfilePage  => {
    switch (action.type) {
        case ADD_POST: {
                let newPost: PostsType = {
                    id: 5,
                    message: state.newPostText,
                }
                let stateCopy = {
                    ...state,
                    posts: [...state.posts, newPost],
                    newPostText: ''
                }
                // let stateCopy = {...state}
                // stateCopy.posts = [...state.posts]
                // stateCopy.posts.push(newPost);
                // stateCopy.newPostText = '';
                return stateCopy;
            }
        case UPDATE_NEW_POST_TEXT:{
            return {
                ...state,
                newPostText: action.newText
            }
            // let stateCopy = {...state}
            // stateCopy.newPostText = action.newText
            // return stateCopy
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
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
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile})

export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data)) })
}

export default profileReducer;