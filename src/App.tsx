import React from 'react';
import '../src/css/style.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


function App() {

    return (
        <BrowserRouter>
            <div className="main">
                <div className="app">
                    <HeaderContainer/>
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
