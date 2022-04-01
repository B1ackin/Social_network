import React from 'react';
import s from '../Profile/Profile.module.css';
import {connect} from "react-redux";
import {Profile, ProfileType} from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import axios from "axios";
import {getUserProfile, setUserProfile} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {usersAPI} from "../../api/api";


type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileType | null
    isAuth: boolean
}
type MapDispathPropsType = {
    getUserProfile: (userId: number) => void

}

type OwnPropsType = MapStateToPropsType & MapDispathPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = +this.props.match.params.userId;
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
    }

    render () {
        if(this.props.isAuth === false ) return <Redirect to={'/Login'} />
        return (
            <div className={s.posts}>

                <Profile {...this.props} profile={this.props.profile}/>
            </div>
            )

    }

}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect<MapStateToPropsType, MapDispathPropsType, {}, AppStateType>(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)