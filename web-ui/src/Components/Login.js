import React, { Component } from 'react'
import {BrowserRouter as Link} from 'react-router-dom'

class Login extends Component {
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
                    <form className="formStyling"  novalidate>
                            
                            Username : <input type="text" name="username" style={{borderRadius:5}} /> <br/><br/>
                            Password : <input type="password" name="password" style={{borderRadius:5}}  /> <br/><br/>
                            <button type="submit" style={{margin:'auto', display:'block'}} >Submit</button>
                    </form>
                </div>
            </div>
            
        );
    }
}

export default Login;
