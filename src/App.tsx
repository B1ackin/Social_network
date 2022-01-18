import React from 'react';
import '../src/css/style.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Users} from "./components/Users/Users";


function App() {

    return (
        <BrowserRouter>
            <div className="main">
                <div className="app">
                    <Header/>
                </div>
                <div className="section">
                    <Navbar/>
                    <Routes>
                        <Route path="/dialogs/*"
                               element={<DialogsContainer/>}/>
                        <Route path="/profile"
                               element={<Profile/>}/>
                        <Route path="/users"
                               element={<Users/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
