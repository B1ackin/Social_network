import React from 'react';
import s from '../Profile/Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import state, {PostsType, ProfilePage} from "../../redux/state";


export type ProfileType = {
    state: ProfilePage
}


export function Profile(props: ProfileType) {
    return <div className={s.posts}>

        <ProfileInfo/>
        <MyPosts postsData={props.state.posts}/>
    </div>
}