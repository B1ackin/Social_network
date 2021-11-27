import React from 'react';
import s from '../MyPosts/MyPosts.module.css';
import {Post} from "./Post/Post";

export function MyPosts() {
    return <div className={s.myPost}>
        <div>My post</div>
        <textarea></textarea>
        <div>
            <button>add post</button>
        </div>
        <Post message={"Hi! How are you?"}/>
        <Post message={"Post 2"}/>
    </div>

}