import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import icon from '../../images/icon.jpg';

class Login extends Component {
    render() { 
        return ( 
            <div>
                <div className="navbar">
                    <img className="icon" src={icon} alt="icon" />
                    <header>Manager Login</header>
                    <span className="spacer"></span>
                </div>
                <Link className="switch-login-link" to="/">PLAYER LOGIN</Link>
            </div>
         );
    }
}
 
export default Login;