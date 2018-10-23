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
    this.didLogin = this.didLogin.bind(this);
  }
  componentDidMount() {
    this.setState({loggedIn:false});
  }
  didLogin (state) {
    console.warn('state received was '+state)
    this.setState({loggedIn: state})
    // alert('this was invoked')
  }
  render() {
    return (
        <HashRouter>
          <div>
            {
              (this.state.loggedIn===true) ? 
              <div>
                <HeaderTag />
                <Route exact path="/" component={HomeScreen} />
                <Route path="/home" component={HomeScreen} />
                <Route path="/profile" component={Profile} />
                <Route path="/component" component={AboutPlatforms} />
              </div>
              :
              <Login didLogin={this.didLogin} />
            }
            
            
          </div>
        </HashRouter>
    );
  }
}

export default App;
