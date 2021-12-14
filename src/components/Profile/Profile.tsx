import React from 'react';
import s from '../Profile/Profile.module.css';

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import state, {PostsType, ProfilePage} from "../../redux/state";
import {MyPosts} from "./MyPosts/MyPosts";


export type ProfileType = {
    state: ProfilePage
    addPost: (postMessage: string) => void
}


export function Profile(props: ProfileType) {



    return <div className={s.posts}>

        <ProfileInfo/>

       <div className={s.wrapper}>
           <div>Description</div>
           <MyPosts postsData={props.state.posts} addPost={props.addPost}/>
       </div>
    </div>
}