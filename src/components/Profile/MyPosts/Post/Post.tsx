import React from 'react';
import s from '../Post/Post.module.css';

export function Post() {
    return  <div className={s.posts}>
            <div className={s.item}>
                <img src="https://skidka02.ru/800/600/https/i.pinimg.com/originals/ad/40/26/ad4026379c73d0accd9d14a4e4f0e24d.jpg" alt=""/>
                Hi! How are you?
            </div>
            <div className={s.item}>
                <img src="https://skidka02.ru/800/600/https/i.pinimg.com/originals/ad/40/26/ad4026379c73d0accd9d14a4e4f0e24d.jpg" alt=""/>
                Post 2
            </div>
            <div className={s.item}>
                <img src="https://skidka02.ru/800/600/https/i.pinimg.com/originals/ad/40/26/ad4026379c73d0accd9d14a4e4f0e24d.jpg" alt=""/>
                Post 3
            </div>
        </div>



}