import React from 'react';
import '../src/css/style.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";

function App() {
  return (
      <div className="main">
          <div className="app">
              <Header />
          </div>
          <div className="section">
              <Navbar/>
              <Profile/>
          </div>

      </div>

  );
}

export default App;
