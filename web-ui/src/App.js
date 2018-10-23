import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Link, Route, Router, HashRouter} from 'react-router-dom';
import HomeScreen from './Components/Home';
import AboutPlatforms from './Components/AboutPlatforms';
import Profile from './Components/Profile';
import HeaderTag from './Components/Header';
import Login from './Components/Login';
import FooterTag from './Components/Footer';

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
  didLogin (state, pass, user) {
    console.warn('username : '+user+'\tpassword : '+pass)
    this.setState({loggedIn: state})
  }
  render() {
    return (
        <HashRouter>
          <div>
            {
              (!this.state.loggedIn===true) 
              ? 
              <div>
                <HeaderTag />
                  <Route exact path="/" component={HomeScreen} />
                  <Route path="/home" component={HomeScreen} />
                  <Route path="/profile" component={Profile} />
                  <Route path="/about" component={AboutPlatforms} />
                <FooterTag />
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
