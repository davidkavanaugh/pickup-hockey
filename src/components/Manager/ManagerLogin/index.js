import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import icon from '../../../images/icon.jpg';



class ManagerLogin extends Component {
    render() { 
        return ( 
            <div>
                <div className="navbar">
                    <img className="icon" src={icon} alt="icon" />
                    <header>Manager Login</header>
                    <span className="spacer"></span>
                </div>
                <div id="login">
                    <form className="form_white-bg">
                        <label>LOGIN</label>
                        <input className="form-input" required type="text" placeholder="username" />
                        <input className="form-input" required type="text" placeholder="password" /><br />
                        <input className="red-btn" type="submit" value="Login" />
                    </form>
                    <span className="or">OR</span>
                    <button className="red-btn">Register</button>
                    <Link className="switch-login-link" to="/">PLAYER LOGIN</Link>
                </div>
            </div>
         );
    }
}
 
export default ManagerLogin;