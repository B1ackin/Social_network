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
type CurrentPageAC = {
    type: 'SET_CURRENT_PAGE'
    currentPage: number
}
type SetUserTotalCountAC = {
    type: 'SET_TOTAL_USERS_COUNT'
    count: number
}

type UsersActionType = FollowAC | UnFollowAC | SetUsersAC | CurrentPageAC | SetUserTotalCountAC

type UserLocationType = {
    city: string,
    country: string
}

type PhotoType = {
    small: string
    large: string
}

export type UserType = {
    id: number,
    followed: boolean,
    name: string,
    status: string,
    photos: PhotoType,
    location: UserLocationType
}

export type UsersArrayType = {
    users: UserType[]
    pageSize?: number
    totalUserCount?: number
    currentPage?: number
}


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'



let initialState: UsersArrayType = {
    users: [],
    pageSize: 10,
    totalUserCount: 5,
    currentPage: 1
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
                users: action.users
            }

            case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
            case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUserCount: action.count
            }
        default:
            return state



    }
}

export const followAC = (userId: number) => ({type: FOLLOW, userId})
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId})
export const setUsersAc = (users: Array<UserType>) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCountAC = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, count: totalCount})



export default usersReducer;