import React from 'react';
import s from '../Profile/Profile.module.css';
import {connect} from "react-redux";
import {Profile, ProfileType} from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import axios from "axios";
import {setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';


type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileType | null
}
type MapDispathPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

type OwnPropsType = MapStateToPropsType & MapDispathPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = +this.props.match.params.userId;
        if (!userId) {
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data) })
    }

    render () {
        return (
            <div className={s.posts}>

                <Profile {...this.props} profile={this.props.profile}/>
            </div>
            )

    }

}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect<MapStateToPropsType, MapDispathPropsType, {}, AppStateType>(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)