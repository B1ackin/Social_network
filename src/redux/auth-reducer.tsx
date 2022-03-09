import React from 'react';

const SET_USER_DATA = 'SET_USER_DATA'

export type SetUserDataType = {
    type: 'SET_USER_DATA'
    data: {
        userId: number
        email: string,
        login: string
    }
}

type AuthStateType = {
    userId: number | null,
    email: string | null,
    login: string | null
    isAuth: boolean
}

let initialState: AuthStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state: AuthStateType = initialState, action: SetUserDataType): typeof initialState => {
switch (action.type) {
    case SET_USER_DATA: {
        return {
            ...state,
            ...action.data,
            isAuth: true
        }
    }
    default:
        return state
    }
}

export const setAuthUserData = (userId: number, email: string, login: string): SetUserDataType => ({

    type: 'SET_USER_DATA',
    data: { userId, email, login }
})


export default authReducer;