import React from 'react';
import {ActionType, ProfilePage} from "./store";

type FollowAC = {
    type: "FOLLOW",
    userId: number
}

type UnFollowAC = {
    type: "UNFOLLOW",
    userId: number
}

type SetUsersAC = {
    type: "SET_USERS",
    users: UserType[]
}

type UsersActionType = FollowAC | UnFollowAC | SetUsersAC

type UserLocationType = {
    city: string,
    country: string
}

export type UserType = {
    id: number,
    followed: boolean,
    fullName: string,
    status: string,
    photoUrl: string,
    location: UserLocationType
}

export type UsersArrayType = {
    users: UserType[]
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState: UsersArrayType = {
    users: [
        {id: 1, photoUrl:'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg', followed: true, fullName: 'Dima', status: 'I am boss', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, photoUrl:'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg', followed: false, fullName: 'Kirill', status: 'I am boss too', location: {city: 'Moskow', country: 'Russian'}},
        {id: 3, photoUrl:'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg', followed: true, fullName: 'Leonid', status: 'I am boss too', location: {city: 'Kiev', country: 'Ukraine'}}
    ]
}

const usersReducer = (state:UsersArrayType = initialState, action: UsersActionType): UsersArrayType  => {
    switch (action.type) {
        case FOLLOW:
            return {
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }


        case UNFOLLOW:
            return {
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state



    }
}

export const followAC = (userId: number) => ({type: FOLLOW, userId})
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId})
export const setUsersAc = (users: Array<UserType>) => ({type: UNFOLLOW, users})



export default usersReducer;