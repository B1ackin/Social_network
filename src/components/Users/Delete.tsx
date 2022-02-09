import axios from 'axios';
import React from 'react';
import {UserType} from "../../redux/users-reducer";
import noAvatar from '../../assets/images/no-avatar.png'

export type UsersPropsType ={
    users: Array<UserType>
    setUsers: (users:Array<UserType>) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
}



export const Delete = (props: UsersPropsType) => {

    if(props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then( response => {
            props.setUsers(response.data.items)
        })
    }
    // if(props.users.length === 0) {
    //  props.setUsers([        {id: 1, photoUrl:'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg', followed: true, fullName: 'Dima', status: 'I am boss', location: {city: 'Minsk', country: 'Belarus'}},
    //      {id: 2, photoUrl:'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg', followed: false, fullName: 'Kirill', status: 'I am boss too', location: {city: 'Moskow', country: 'Russian'}},
    //      {id: 3, photoUrl:'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg', followed: true, fullName: 'Leonid', status: 'I am boss too', location: {city: 'Kiev', country: 'Ukraine'}}])
    // }


    return <div ><h1 className='titleFriend'>My Friends:</h1>
        <div className='usersList'>
        {

            props.users.map(u => <div key={u.id} className='usersCard'>
                <span><div>
                    <img width={100} height={100} src={u.photos.small != null ? u.photos.small : noAvatar}/>
                </div>
                <div>
                   {u.followed
                       ? <button onClick={() => { props.unfollow(u.id)} }>Unfollow</button>
                       : <button onClick={ () => {props.follow(u.id)} }>Follow</button>
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
