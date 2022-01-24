import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Users} from "./Users";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setUsersAc,
    setUsersTotalCountAC,
    unfollowAC,
    UserType
} from "../../redux/users-reducer";
import {UsersC} from "./UsersC";

type MapStatePropsType = {
    users:UserType[]
    pageSize: number
    totalUserCount: number
    currentPage: number

}
type MapDispatchToProps = {
    follow:(userId:number) => void
    unfollow:(userId:number) => void
    setUsers:(users:UserType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount:number) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchToProps

const MapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage
    } as MapStatePropsType
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
      },
      setCurrentPage: (pageNumber: number) => {
          dispatch(setCurrentPageAC(pageNumber))
      },
      setTotalUsersCount: (totalCount: number) => {
          dispatch(setUsersTotalCountAC(totalCount))
      }
  }
}


export default connect(MapStateToProps, MapDispatchToProps) (UsersC)