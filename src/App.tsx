import React from 'react';
import '../src/css/style.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import state, {RootStateType} from './redux/state'

export type RootStatePropsType = {
    state: RootStateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}


function App(props: RootStatePropsType) {
    debugger
  return (
      <BrowserRouter>
      <div className="main">
          <div className="app">
              <Header />
          </div>
          <div className="section">
              <Navbar/>
              <Routes>
              <Route path="/dialogs/*"
                     element={<Dialogs state={props.state.dialogsPage} />} />
              <Route path="/profile"
                     element={<Profile profilePage={props.state.profilePage}
                                       addPost={props.addPost}
                                       updateNewPostText={props.updateNewPostText}
                     />}/>
              </Routes>
          </div>
      </div>
      </BrowserRouter>
  );
}

export default App;
