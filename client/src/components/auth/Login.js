import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="center">
        <div className="form_white-bg">
          <div className="center">
            <div className="label">
              <h3>
                Login
              </h3>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-container">
                <input
                  label="Email"
                  placeholder="Email"
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  margin="normal"
                  variant="outlined"
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  className={classnames("form-input", {
                      invalid: errors.email || errors.emailnotfound
                    })}
                />
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>
              <div className="input-container">
              <input
                    label="Password"
                    placeholder="Password"

                    name="password"
                    margin="normal"
                  variant="outlined"
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("form-input", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
                <br />
              </div>
              <div className="col center">
                <button
                  type="submit"
                  className="red-btn"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className='or'>or</div>
        <Link to="/register" className="red-btn">Register</Link>
      </div>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);