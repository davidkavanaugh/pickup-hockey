import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import UploadProfileImg from './UploadProfileImg';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      first: "",
      last: "",
      email: "",
      password: "",
      password2: "",
      hometown: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to profile
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/profile");
    }
  }

  componentWillReceiveProps(nextProps) {
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

    const newUser = {
      first: this.state.first,
      last: this.state.last,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      hometown: this.state.hometown
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="center">
        <div><br />
          <div className="center">
          <div className="label">
              <h3>
                Register
              </h3>
          </div>
          <form 
            noValidate 
            onSubmit={this.onSubmit}
            >
            <div className="input-container">
              <input
                placeholder='First Name'
                onChange={this.onChange}
                value={this.state.first}
                error={errors.first}
                id="first"
                type="text"
                className={classnames("form-input", {
                  invalid: errors.first
                })}
              />
              <span className="red-text">{errors.first}</span>
            </div>
            <div className="input-container">
              <input
                placeholder='Last Name'
                onChange={this.onChange}
                value={this.state.last}
                error={errors.last}
                id="last"
                type="text"
                className={classnames("form-input", {
                  invalid: errors.last
                })}
              />
              <span className="red-text">{errors.last}</span>
            </div>
            <div className="input-container">
              <input
                placeholder='Email'
                onChange={this.onChange}
                value={this.state.email}
                error={errors.email}
                id="email"
                type="email"
                className={classnames("form-input", {
                  invalid: errors.email
                })}
              />
              <span className="red-text">{errors.email}</span>
            </div>
            <div className="input-container">
              <input
                placeholder='Password'
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
                id="password"
                type="password"
                className={classnames("form-input", {
                  invalid: errors.password
                })}
              />
              <span className="red-text">{errors.password}</span>
            </div>
            <div className="input-container">
              <input
                placeholder='Confirm Password'
                onChange={this.onChange}
                value={this.state.password2}
                error={errors.password2}
                id="password2"
                type="password"
                className={classnames("form-input", {
                  invalid: errors.password2
                })}
              />
              <span className="red-text">{errors.password2}</span>
              <br />
            </div>
            <div className="input-container">
              <input
                placeholder='Hometown'
                onChange={this.onChange}
                value={this.state.hometown}
                error={errors.hometown}
                id="hometown"
                type="text"
                className={classnames("form-input", {
                  invalid: errors.hometown
                })}
              />
              <span className="red-text">{errors.hometown}</span>
            </div>
            <div className="col center">
              <button
                type="submit"
                className="red-btn"
              >
                Submit
              </button>
            </div>
          </form>
          <p className="grey-text">
              Already have an account? <Link to="/login">Log in</Link>
          </p>
          <UploadProfileImg />  
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));