import React, { Component } from 'react'
import {BrowserRouter as Link} from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',
        }
    }

    setLoginParams () {
        this.props.didLogin(true, this.state.password, this.state.username);
    }

    render() {
        const styling = {
            margin:'auto',
            display:'block',
            marginTop: 10,
            marginRight: '38%',
            marginLeft: '38%',
            padding: '40px 15px 40px 15px',
            borderRadius: 20,
            border: '2px solid pink',
        }
        return (
            <div>
                <h2 style={{textAlign:'center'}}>Enter your credentials</h2>
                <div style={styling}>
                    <img src={require("./img/cet_pic.jpeg")} style={{marginLeft:'20%', marginBottom:20}}/>
                    <form noValidate>
                            
                            Username : <input type="text" 
                                              value={this.state.username} 
                                              style={{borderRadius:5}} 
                                              onChange={(event) => {
                                                  this.setState({username: event.target.value});
                                              }}
                                               /> 
                                        <br/><br/>
                            Password : <input type="password" 
                                              value={this.state.password} 
                                              style={{borderRadius:5}} 
                                              onChange={(event) => {
                                                this.setState({password: event.target.value});
                                            }}
                                              /> 
                                        <br/><br/>
                            <button type="submit" style={{margin:'auto', display:'block'}} onClick={this.setLoginParams.bind(this)} >Submit</button>
                    </form>
                </div>
            </div>
            
        );
    }
}


export default Login;
