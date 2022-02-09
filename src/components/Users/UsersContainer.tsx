import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Delete} from "./Delete";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setUsersAc,
    setUsersTotalCountAC,
    unfollowAC,
    UserType
} from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";

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


export class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChange = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <Users totalUserCount={this.props.totalUserCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      onPageChange={this.onPageChange}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
        />
    }
}

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


export default connect(MapStateToProps, MapDispatchToProps) (UsersContainer)