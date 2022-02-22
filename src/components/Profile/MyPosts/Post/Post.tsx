import React from 'react';
import s from '../Post/Post.module.css';
import avatar from '../../../../img/avatarka.jpg';
import {PostsType} from "../../../Dialogs/Dialogs";


export function Post(props: PostsType) {
    return  <div className={s.posts}>
            <div className={s.item}>
                <img src={avatar} alt=""/>
                <span className='postMessage'>{props.message}</span>
            </div>
        </div>



}