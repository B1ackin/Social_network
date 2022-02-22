import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {PostsType} from "../../Dialogs/Dialogs";

// type MyPostsPropsType = {
//     store: StoreType
// }

type MapStatePropsType = {
    posts: PostsType[]
    newPostText:string
}
type MapDispatchToProps = {
    onPostChange:(text:string) => void
    onAddPost:() => void
}
export type MyPostPropsType = MapStatePropsType & MapDispatchToProps

// export const MyPostsContainer : React.FC<MyPostsPropsType>= (props)=> {
//
//     let state = props.store.getState()
//
//     let onAddPost = () => {
//         props.store.dispatch(addPostAC())
//     }
//
//     let onPostChange = (text: string) => {
//         let action = updateNewPostTextAC(text)
//         props.store.dispatch( action )
//     }
//
//     return <MyPosts posts={state.profilePage.posts}
//                     onAddPost={onAddPost}
//                     updateNewPostTextAC={onPostChange}
//                     newPostText={state.profilePage.newPostText}/>
//
// }


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: (action: any) => void): MapDispatchToProps => {
    return {
        onAddPost: () => {
            dispatch(addPostAC())
        },

        onPostChange: (text: string) =>
            dispatch( updateNewPostTextAC(text) )
        }
    }



const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;