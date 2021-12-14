import React, {RefObject} from 'react';
import s from '../MyPosts/MyPosts.module.css';
import {Post} from "./Post/Post";
import state, {PostsType} from "../../../redux/state";

type MyPostsPropsType = {
    postsData: PostsType[]
    addPost: (postMessage: string) => void
}


export const MyPosts : React.FC<MyPostsPropsType>= (props)=> {

    let PostElements = props.postsData.map(p => <Post id={p.id} message={p.message} />)

    let newPostElement:RefObject<HTMLTextAreaElement> = React.createRef()

    let addPost = () => {
        if(newPostElement.current) {
            let text = newPostElement.current.value
            props.addPost(text)
            newPostElement.current.value = ""
        }
    }

    return <div className={s.myPost}>
        <div>My post</div>
        <textarea ref={newPostElement}></textarea>
        <div>
            <button onClick={addPost}>Add post</button>
        </div>
           {PostElements}
    </div>

}