
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import UserStore from "./Stores/UserStore";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Rest from './Components/Rest';

import { Provider } from "mobx-react"
const axios = require('axios');

export default class App extends React.Component {
  constructor(){
    super()
  }

  render() {
    return (
      <Provider userStore={new UserStore()}>
        <Router>
          <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
            <Navbar />
            <div style={{ flex: 1 }}>
              <Route exact path='/' render={() => <Home />} />
              <Route path='/rest' render={() => <Rest />} />
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}


