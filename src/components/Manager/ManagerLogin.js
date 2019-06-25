import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import icon from '../../images/icon.jpg';
import loginGif from '../../images/login-gif.gif';
import { connect } from 'react-redux';

import { userActions } from '../../actions';

class ManagerLogin extends Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


        handleChange(e) {
            const { name, value } = e.target;
            this.setState({ [name]: value });
        }
    
        handleSubmit(e) {
            e.preventDefault();
    
            this.setState({ submitted: true });
            const { username, password } = this.state;
            const { dispatch } = this.props;
            if (username && password) {
                dispatch(userActions.login(username, password));
            }
        }        

    
    render() { 
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;

        return ( 
            <div>
                <div className="navbar">
                    <img className="icon" src={icon} alt="icon" />
                    <header>Manager Login</header>
                    <span className="spacer"></span>
                </div>
                <div id="login">
                    <form className="form_white-bg" onSubmit={this.handleSubmit}>
                        <label>LOGIN</label>
                        <input className="form-input" required type="text" placeholder="username" name="username" value={username} onChange={this.handleChange} />
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                        <input className="form-input" required type="password" placeholder="password" name="password" value={password} onChange={this.handleChange} /><br />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                        <input className="red-btn" type="submit" value="Login" />
                        {loggingIn &&
                            <img src={loginGif} alt="logging in" />
                        }
                    </form>
                    <span className="or">OR</span>
                    <Link to="/manager/register" className="red-btn">Register</Link>
                    <Link className="switch-login-link" to="/">PLAYER LOGIN</Link>
                </div>
            </div>
         );
    }
}
 
function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

export default connect(mapStateToProps)(ManagerLogin);