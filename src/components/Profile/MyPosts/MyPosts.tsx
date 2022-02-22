import React, {ChangeEvent, RefObject} from 'react';
import s from '../MyPosts/MyPosts.module.css';
import {Post} from "./Post/Post";
import {MyPostPropsType} from "./MyPostsContainer";

// type MyPostsPropsType = {
//     posts: PostsType[]
//     onAddPost: () => void
//     updateNewPostTextAC: (text: string) => void
//     newPostText: string
// }


export const MyPosts : React.FC<MyPostPropsType>= (props)=> {

    let PostElements = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} />)
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        props.onAddPost()
    }

    // let onPostChange = () => {
    //     if(newPostElement.current) {
    //         let text = newPostElement.current.value
    //         props.onPostChange(text)
    //     }
    // }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = newPostElement.current ? newPostElement.current.value : "";
        props.onPostChange(text);

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