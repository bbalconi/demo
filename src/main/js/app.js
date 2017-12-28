
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import UserStore from "./Stores/UserStore";
import Navbar from './Components/Navbar';
import Home from './Components/Home';

import { Provider } from "mobx-react"
const axios = require('axios');

export default class App extends React.Component {

  componentDidMount() {
    axios.get('http://localhost:8080/api/employees').then((res) => {
      console.log(res)
    })
  }

  render() {
    return (
      <Provider userStore={new UserStore()}>
        <Router>
          <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
            <Navbar />
            <div style={{ flex: 1 }}>
              <Route exact path='/' render={() => <Home />} />
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}


