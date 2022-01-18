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

type UsersActionType = FollowAC | UnFollowAC

type UserLocationType = {
    city: string,
    country: string
}

type UserType = {
    id: number,
    followed: boolean,
    fullName: string,
    status: string,
    location: UserLocationType
}

type UsersArrayType = {
    users: UserType[]
}

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"

let initialState: UsersArrayType = {
    users: [
        {id: 1, followed: true, fullName: 'Dima', status: 'I am boss', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, followed: false, fullName: 'Kirill', status: 'I am boss too', location: {city: 'Moskow', country: 'Russian'}},
        {id: 3, followed: true, fullName: 'Leonid', status: 'I am boss too', location: {city: 'Kiev', country: 'Ukraine'}}
    ]
}

const usersReducer = (state:UsersArrayType = initialState, action: UsersActionType)  => {
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


        default:
            return state



    }
}

export const followAC = (userId: number) => ({type: FOLLOW, userId})

export const unFollowAC = (userId: number) => ({type: UNFOLLOW, userId})


export default usersReducer;