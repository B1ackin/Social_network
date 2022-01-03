import React from 'react';
import s from '../Profile/Profile.module.css';

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import state, {ActionType, ProfilePage} from "../../redux/store";
import {MyPosts} from "./MyPosts/MyPosts";


export type ProfileType = {
    profilePage: ProfilePage
    dispatch: (action: ActionType) => void
}


export function Profile(props: ProfileType) {

    return <div className={s.posts}>

        <ProfileInfo/>

       <div className={s.wrapper}>
           <div>Description</div>
           <MyPosts postsData={props.profilePage.posts}
                    newPostText={props.profilePage.newPostText}
                    dispatch={props.dispatch}
           />
       </div>
    </div>
}