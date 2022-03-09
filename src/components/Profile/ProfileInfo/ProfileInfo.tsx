import React from 'react';
import s from '../ProfileInfo/ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType, PropsType} from "../Profile";

// import {MyPosts} from "./MyPosts/MyPosts";



export function ProfileInfo(props: PropsType) {
    if (!props.profile) {
        return <Preloader/>
    }

    return <div className={s.profileInfo}>

        <div className={s.avatar}><img className={s.photo} src={props.profile.photos.large || undefined} alt=""/></div>

    </div>
}