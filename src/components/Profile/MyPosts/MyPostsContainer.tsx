import React from 'react';
import {StoreType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";

type MyPostsPropsType = {
    store: StoreType
}


export const MyPostsContainer : React.FC<MyPostsPropsType>= (props)=> {

    let state = props.store.getState()

    let onAddPost = () => {
        props.store.dispatch(addPostAC())
    }

    let onPostChange = (text: string) => {
        let action = updateNewPostTextAC(text)
        props.store.dispatch( action )
    }

    return <MyPosts posts={state.profilePage.posts}
                    onAddPost={onAddPost}
                    updateNewPostTextAC={onPostChange}
                    newPostText={state.profilePage.newPostText}/>

}