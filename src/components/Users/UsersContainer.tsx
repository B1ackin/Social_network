import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followSuccess, getUsersTC,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toogleFollowingProgress, toogleIsFetching,
    unfollowSuccess,
    UserType
} from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";
import {usersAPI} from "../../api/api";


type MapStatePropsType = {
    users:UserType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

type MapDispatchToProps = {
    follow:(userId:number) => void
    unfollow:(userId:number) => void
    setCurrentPage: (pageNumber: number) => void
    toogleFollowingProgress: (isFetching:boolean, userId:number) => void
    getUsersTC: (currentPage: number, pageSize: number) => void

}

type OwnProps = {

}

export type UsersPropsType = MapStatePropsType & MapDispatchToProps & OwnProps


export class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {

        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)

        // this.props.toogleIsFetching(true)
        // usersAPI.getUser(this.props.currentPage, this.props.pageSize).then(data => {
        //         this.props.toogleIsFetching(false)
        //         this.props.setUsers(data.items)
        //         this.props.setTotalUsersCount(data.totalCount)
        //     })
    }

    onPageChange = (pageNumber: number) => {
        this.props.getUsersTC(pageNumber, this.props.pageSize)
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
               followingInProgress={this.props.followingInProgress}
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
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
    follow: followSuccess,
    unfollow: unfollowSuccess,
    setCurrentPage,
    toogleFollowingProgress,
    getUsersTC
}) (UsersContainer)