import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Link, Route, Router, HashRouter} from 'react-router-dom';
import HomeScreen from './Components/Home';
import AboutPlatforms from './Components/AboutPlatforms';
import Profile from './Components/Profile';
import HeaderTag from './Components/Header';
import Login from './Components/Login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    }
  }
  componentDidMount() {
    this.setState({loggedIn:false});
  }
  render() {
    return (
        <HashRouter>
          <div>
            {
              (this.state.loggedIn) ? 
              <div>
                <HeaderTag />
                <Route exact path="/" component={HomeScreen} />
                <Route path="/home" component={HomeScreen} />
                <Route path="/profile" component={Profile} />
                <Route path="/component" component={AboutPlatforms} />
              </div>
              :
              <Login />
            }
            
            
          </div>
        </HashRouter>
    );
  }
}

export default App;
