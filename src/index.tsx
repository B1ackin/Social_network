import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from "./redux/state";

// export type DialogPropsType = {
//     id: number,
//     name: string
// }
//
//
// export type MessagePropsType = {
//     id?: number
//     message: string
// }
//
//
//
// export type DataDialogsPropsType = {
//     dialogs: Array<DialogPropsType>,
//     messages: Array<MessagePropsType>
//     posts: Array<PostPropsType>
// }

// let dialogs = [
//     {id: 1, name: "Valera"},
//     {id: 2, name: "Igor"},
//     {id: 3, name: "Kirill"},
//     {id: 4, name: "Leonid"},
// ]
//
// let messages: Array<MessagePropsType> = [
//     {id: 1, message: "Hi, how are you?"},
//     {id: 2, message: "Hi"},
//     {id: 3, message: "Yo"},
// ]

// let posts: Array<PostPropsType> = [
//     {id: 1, message: "Hi, how are you?"},
//     {id: 2, message: "Hi, this is my first post"},
//     {id: 3, message: "Yo yo yo"}
//
// ]


ReactDOM.render(
  <React.StrictMode>
    <App state={state}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
