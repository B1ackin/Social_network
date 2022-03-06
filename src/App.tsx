import React from 'react';
import '../src/css/style.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Delete} from "./components/Users/Delete";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


function App() {

    return (
        <BrowserRouter>
            <div className="main">
                <div className="app">
                    <Header/>
                </div>
                <div className="section">
                    <Navbar/>
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>

                    <Route path="/dialogs"
                           render={() => <DialogsContainer/>}/>

                    <Route path="/users"
                           render={() => <UsersContainer /> }/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
