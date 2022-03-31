import React from 'react';
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

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
type setTotalUsersCountAC = {
    type: 'SET_TOTAL_USERS_COUNT'
    count: number
}
type toogleIsFetchingAC = {
    type: 'TOOGLE_IS_FETCHING'
    isFetching: boolean
}
type toogleFollowingProgressAC = {
    type: 'TOOGLE_IS_FOLLOWING_PROGRESS'
    isFetching: boolean,
    userId: number
}

type UsersActionType = FollowAC | UnFollowAC | SetUsersAC | CurrentPageAC | setTotalUsersCountAC | toogleIsFetchingAC | toogleFollowingProgressAC

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
    totalCount?: number
    isFetching: boolean
    followingInProgress: Array<number>
}


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING'
const TOOGLE_IS_FOLLOWING_PROGRESS = 'TOOGLE_IS_FOLLOWING_PROGRESS'



let initialState: UsersArrayType = {
    users: [],
    pageSize: 12,
    totalUserCount: 5,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state:UsersArrayType = initialState, action: UsersActionType): UsersArrayType  => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }


        case UNFOLLOW:
            return {
                ...state,
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
            case TOOGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
            case TOOGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }

        default:
            return state



    }
}

export const follow = (userId: number) => ({type: FOLLOW, userId})
export const unfollow = (userId: number) => ({type: UNFOLLOW, userId})
export const setUsers = (users: Array<UserType>) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, count: totalCount})
export const toogleIsFetching = (isFetching: boolean) => ({type: TOOGLE_IS_FETCHING, isFetching})
export const toogleFollowingProgress = (isFetching: boolean, userId: number) => ({type: TOOGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export const getUserTC = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(toogleIsFetching(true))
    usersAPI.getUser(currentPage, pageSize).then(data => {
        dispatch(toogleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    })
}


export default usersReducer;