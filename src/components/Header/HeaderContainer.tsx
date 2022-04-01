import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getAuthUserData, setAuthUserData} from "../../redux/auth-reducer";
import {authAPI, usersAPI} from "../../api/api";


type MapStateType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchType = {
    getAuthUserData: () => void
}


type PropsType = MapStateType & MapDispatchType

class HeaderContainer extends React.Component<PropsType>{
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render () {
        return <Header {...this.props} />
    }
}

const MapStateToProps = (state: AppStateType): MapStateType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


export default connect<MapStateType, MapDispatchType, {}, AppStateType> (MapStateToProps, {getAuthUserData}) (HeaderContainer);