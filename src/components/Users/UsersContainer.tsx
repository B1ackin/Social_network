import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Users} from "./Users";
import {Dispatch} from "redux";
import {followAC, setUsersAc, unfollowAC,  UserType} from "../../redux/users-reducer";
import {UsersC} from "./UsersC";

type MapStatePropsType = {
    users:UserType[]
}
type MapDispatchToProps = {
    follow:(userId:number) => void
    unfollow:(userId:number) => void
    setUsers:(users:UserType[]) => void
}


const MapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        users: state.usersPage.users
    }
}

const MapDispatchToProps = (dispatch: Dispatch):MapDispatchToProps => {
  return {
      follow: (userId: number) => {
          dispatch(followAC(userId))
      },
      unfollow: (userId: number) => {
          dispatch(unfollowAC(userId))
      },
      setUsers: (users: Array<UserType>) => {
          dispatch(setUsersAc(users))
      }
  }
}


export default connect(MapStateToProps, MapDispatchToProps) (UsersC)