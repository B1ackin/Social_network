import React from 'react';
import s from '../Profile/Profile.module.css';

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import state, {PostsType, ProfilePage} from "../../redux/state";
import {MyPosts} from "./MyPosts/MyPosts";


export type ProfileType = {
    profilePage: ProfilePage
    addPost: () => void
    updateNewPostText: (newText: string) => void
}


export function Profile(props: ProfileType) {



    return <div className={s.posts}>

        <ProfileInfo/>

       <div className={s.wrapper}>
           <div>Description</div>
           <MyPosts postsData={props.profilePage.posts}
                    newPostText={props.profilePage.newPostText}
                    addPost={props.addPost}
                    updateNewPostText={props.updateNewPostText}
           />
       </div>
    </div>
}