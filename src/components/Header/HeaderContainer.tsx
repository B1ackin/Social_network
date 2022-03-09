import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Header/Header.module.css';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {setAuthUserData} from "../../redux/auth-reducer";


type MapStateType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchType = {
    setAuthUserData: (id: number, email: string, login: string) => void
}


type PropsType = MapStateType & MapDispatchType

class HeaderContainer extends React.Component<PropsType>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if(response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }

    render () {
        return <Header {...this.props} />
    }
}

const MapStateToProps = (state: AppStateType): MapStateType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


export default connect<MapStateType, MapDispatchType, {}, AppStateType> (MapStateToProps, {setAuthUserData}) (HeaderContainer);