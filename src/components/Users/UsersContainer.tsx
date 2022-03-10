import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toogleIsFetching,
    unfollow,
    UserType
} from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";


type MapStatePropsType = {
    users:UserType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
}

type MapDispatchToProps = {
    follow:(userId:number) => void
    unfollow:(userId:number) => void
    setUsers:(users:UserType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount:number) => void
    toogleIsFetching: (isFetching: boolean) => void
}

type OwnProps = {

}

export type UsersPropsType = MapStatePropsType & MapDispatchToProps & OwnProps


export class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.toogleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.toogleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChange = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toogleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.toogleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        return <>
        {/*{this.props.isFetching ? <Preloader/> : null}*/}
        <Users totalUserCount={this.props.totalUserCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      onPageChange={this.onPageChange}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
               isFetching={this.props.isFetching}
        />
        </>
    }
}

const MapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    } as MapStatePropsType
}

// const MapDispatchToProps = (dispatch: Dispatch):MapDispatchToProps => {
//   return {
//       follow: (userId: number) => {
//           dispatch(followAC(userId))
//       },
//       unfollow: (userId: number) => {
//           dispatch(unfollowAC(userId))
//       },
//       setUsers: (users: Array<UserType>) => {
//           dispatch(setUsersAc(users))
//       },
//       setCurrentPage: (pageNumber: number) => {
//           dispatch(setCurrentPageAC(pageNumber))
//       },
//       setTotalUsersCount: (totalCount: number) => {
//           dispatch(setUsersTotalCountAC(totalCount))
//       },
//       toogleIsFetching: (isFetching: boolean) => {
//           dispatch(isFetchingAC(isFetching))
//       }
//   }
// }


export default connect<MapStatePropsType, MapDispatchToProps, OwnProps, AppStateType>(MapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toogleIsFetching
}) (UsersContainer)