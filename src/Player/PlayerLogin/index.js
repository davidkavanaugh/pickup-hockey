import React, { Component } from 'react';
import './style.css';
import icon from '../../images/icon.jpg';
import { Link } from 'react-router-dom';

class PlayerLogin extends Component {
    render() { 
        return ( 
            <div>
                <div className="navbar">
                    <img className="icon" src={icon} alt="icon" />
                    <header>Player Login</header>
                    <span className="spacer"></span>
                </div>
                <div id="player_player-login">
                    <form className="form_white-bg">
                        <label>LOGIN</label>
                        <input className="form-input" required type="text" placeholder="username" />
                        <input className="form-input" required type="text" placeholder="password" /><br />
                        <input className="red-btn" type="submit" value="Login" />
                    </form>
                    <span className="or">OR</span>
                    <button className="red-btn">Register</button>
                    <Link className="manager-login-link" to="/manager-login">MANAGER LOGIN</Link>
                </div>                
            </div>
         );
    }
}
 
export default PlayerLogin;