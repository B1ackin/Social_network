import React from 'react';
import s from '../MyPosts/MyPosts.module.css';
import {Post} from "./Post/Post";
import state, {PostsType} from "../../../redux/state";

type MyPostsPropsType = {
    postsData: PostsType[]
}


export function MyPosts(props: MyPostsPropsType) {

    let PostElements = props.postsData.map(p => <Post id={p.id} message={p.message} />)

    return <div className={s.myPost}>
        <div>My post</div>
        <textarea></textarea>
        <div>
            <button>add post</button>
        </div>
           {PostElements}
    </div>

}