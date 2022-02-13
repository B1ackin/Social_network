import React from 'react';
import {UserType} from "../../redux/users-reducer";
import noAvatar from '../../assets/images/no-avatar.png'
import s from './users.module.css'
import {Preloader} from "../common/Preloader/Preloader";

type PropsUserType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    onPageChange: (pageNumber: number) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    isFetching: boolean
}

 const Users = (props:PropsUserType) => {

    let pageCount = Math.ceil(props.totalUserCount / props.pageSize) //pageSize: 12 //totalUserCount: 5 // Всего
     //юзеров делим на количество друзей на странице и получаем кол-во страниц
     console.log(pageCount) //1455 страниц

    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

        return <div><h1 className='titleFriend'>My Friends:</h1>
            <div>
                {props.isFetching ? <Preloader/> : null}
                {pages.map(p => {
                    return <span className={props.currentPage === p ? s.selectedPage : ''}
                                 onClick={() => {
                                     props.onPageChange(p)
                                 }}
                    >{p}</span>
                })}
            </div>
            <div className='usersList'>
                {

                    props.users.map(u => <div key={u.id} className='usersCard'>
                <span><div>
                    <img width={100} height={100} src={u.photos.small != null ? u.photos.small : noAvatar}/>
                </div>
                <div>
                   {u.followed
                       ? <button onClick={() => {
                           props.unfollow(u.id)
                       }}>Unfollow</button>
                       : <button onClick={() => {
                           props.follow(u.id)
                       }}>Follow</button>
                   }
                </div>
                </span>
                            <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                            <span>
                        <div>{"u.location.country"}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                        </div>
                    )
                }


            </div>
        </div>
    }


export default Users;
