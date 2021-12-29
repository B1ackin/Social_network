import React, {RefObject} from 'react';
import s from '../MyPosts/MyPosts.module.css';
import {Post} from "./Post/Post";
import state, {ActionType, addPostAC, PostsType, updateNewPostTextAC} from "../../../redux/state";

type MyPostsPropsType = {
    postsData: PostsType[]
    newPostText: string
    dispatch: (action: ActionType) => void

}


export const MyPosts : React.FC<MyPostsPropsType>= (props)=> {

    let PostElements = props.postsData.map(p => <Post id={p.id} message={p.message} />)

    let newPostElement:RefObject<HTMLTextAreaElement> = React.createRef()

    let addPost = () => {
        props.dispatch(addPostAC())
    }

    let onPostChange = () => {
        if(newPostElement.current) {
            let text = newPostElement.current.value
            let action = updateNewPostTextAC(text)
            props.dispatch( action )


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