import React, {RefObject} from 'react';
import s from '../MyPosts/MyPosts.module.css';
import {Post} from "./Post/Post";
import state, {PostsType} from "../../../redux/state";

type MyPostsPropsType = {
    postsData: PostsType[]
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void

}


export const MyPosts : React.FC<MyPostsPropsType>= (props)=> {

    let PostElements = props.postsData.map(p => <Post id={p.id} message={p.message} />)

    let newPostElement:RefObject<HTMLTextAreaElement> = React.createRef()

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        if(newPostElement.current) {
            let text = newPostElement.current.value
            props.updateNewPostText(text)


        }
    }

    return <div className={s.myPost}>
        <div>My post</div>
        <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
        <div>
            <button onClick={addPost}>Add post</button>
        </div>
           {PostElements}
    </div>

}