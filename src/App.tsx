import React from 'react';
import '../src/css/style.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import state, {ActionType, StateType, StoreType} from './redux/state'
import store from "./redux/state";

export type RootStatePropsType = {
    store: StoreType
    state: StateType
    dispatch: (action: ActionType) => void
}


function App(props: RootStatePropsType) {

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
                     element={<Dialogs store={store} />} />
              <Route path="/profile"
                     element={<Profile profilePage={props.state.profilePage}
                                       dispatch={store.dispatch.bind(store)}
                     />}/>
              </Routes>
          </div>
      </div>
      </BrowserRouter>
  );
}

export default App;
