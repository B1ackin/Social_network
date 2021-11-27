import React from 'react';
import '../src/css/style.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>

      <div className="main">
          <div className="app">
              <Header />
          </div>
          <div className="section">
              <Navbar/>
              <Routes>
              <Route path="/dialogs/*" element={<Dialogs/>} />
              <Route path="/profile" element={<Profile />}/>
              </Routes>
          </div>

      </div>

      </BrowserRouter>
  );
}

export default App;
