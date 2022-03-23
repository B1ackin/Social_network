import React from 'react';
import s from '../Profile/Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


export type PropsType = {
    profile: ProfileType | null
}
export type PostDataArray = {
    id: string
    message: string
    like: number
}
export type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
export type PhotosType = {
    small: string | null
    large: string | null
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}


export function Profile(props: PropsType) {

    return <div className={s.posts}>

        <ProfileInfo profile={props.profile}/>

       <div className={s.wrapper}>
           <div className={s.lastName}>Leonid Kruchenok</div>
           <div className={s.descrip}>Description</div>
           <MyPostsContainer />
       </div>
    </div>
}