import React from 'react';
import s from '../Profile/Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


export type ProfileType = {
    store: StoreType
}


export function Profile(props: ProfileType) {

    return <div className={s.posts}>

        <ProfileInfo/>

       <div className={s.wrapper}>
           <div>Description</div>
           <MyPostsContainer store={props.store} />
       </div>
    </div>
}