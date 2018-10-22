import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Link, Route, Router, HashRouter} from 'react-router-dom';
import HomeScreen from './Components/Home';
import AboutPlatforms from './Components/AboutPlatforms';
import Profile from './Components/Profile';
import HeaderTag from './Components/Header';

class App extends Component {
  render() {
    return (
        <HashRouter>
          <div>
            <HeaderTag />
          <Route exact path="/" component={HomeScreen} />
          <Route path="/home" component={HomeScreen} />
          <Route path="/profile" component={Profile} />
          <Route path="/component" component={AboutPlatforms} />
          </div>
          
        </HashRouter>
    );
  }
}

export default App;
