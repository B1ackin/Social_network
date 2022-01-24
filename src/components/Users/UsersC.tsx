import axios from 'axios';
import React from 'react';
import {UserType} from "../../redux/users-reducer";
import noAvatar from '../../assets/images/no-avatar.png'
import s from './users.module.css'
import {UsersPropsType} from "./UsersContainer";


export class UsersC extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChange = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pageCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)

        let pages = []
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }


        return <div><h1 className='titleFriend'>My Friends:</h1>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p ? s.selectedPage : ''}
                                 onClick={() => {
                                     this.onPageChange(p)
                                 }}
                    >{p}</span>
                })}
            </div>
            <div className='usersList'>
                {

                    this.props.users.map(u => <div key={u.id} className='usersCard'>
                <span><div>
                    <img width={100} height={100} src={u.photos.small != null ? u.photos.small : noAvatar}/>
                </div>
                <div>
                   {u.followed
                       ? <button onClick={() => {
                           this.props.unfollow(u.id)
                       }}>Unfollow</button>
                       : <button onClick={() => {
                           this.props.follow(u.id)
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
}
