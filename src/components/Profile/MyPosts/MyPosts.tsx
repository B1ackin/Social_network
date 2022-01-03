import React, {ChangeEvent, RefObject} from 'react';
import s from '../MyPosts/MyPosts.module.css';
import {Post} from "./Post/Post";
import state, {ActionType, PostsType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
    posts: PostsType[]
    onAddPost: () => void
    updateNewPostTextAC: (text: string) => void
    newPostText: string
}


export const MyPosts : React.FC<MyPostsPropsType>= (props)=> {

    let PostElements = props.posts.map(p => <Post id={p.id} message={p.message} />)
    let newPostElement:RefObject<HTMLTextAreaElement> = React.createRef()

    let addPost = () => {
        props.onAddPost()
    }

    let onPostChange = () => {
        if(newPostElement.current) {
            let text = newPostElement.current.value
            props.updateNewPostTextAC(text)
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