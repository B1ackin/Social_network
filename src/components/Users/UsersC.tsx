import axios from 'axios';
import React from 'react';
import {UserType} from "../../redux/users-reducer";
import noAvatar from '../../assets/images/no-avatar.png'

type UsersPropsType ={
    users: Array<UserType>
    setUsers: (users:Array<UserType>) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
}



export class UsersC extends React.Component<UsersPropsType>{

        componentDidMount() {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then( response => {
                this.props.setUsers(response.data.items)
            })
        }

    render() {

    return <div ><h1 className='titleFriend'>My Friends:</h1>
        <div className='usersList'>
        {

            this.props.users.map(u => <div key={u.id} className='usersCard'>
                <span><div>
                    <img width={100} height={100} src={u.photos.small != null ? u.photos.small : noAvatar}/>
                </div>
                <div>
                   {u.followed
                       ? <button onClick={() => { this.props.unfollow(u.id)} }>Unfollow</button>
                       : <button onClick={ () => {this.props.follow(u.id)} }>Follow</button>
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
}
