import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
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
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
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
          <form noValidate onSubmit={this.onSubmit}>
            <div className="input-container">
              <input
                placeholder='Name'
                onChange={this.onChange}
                value={this.state.name}
                error={errors.name}
                id="name"
                type="text"
                className={classnames("form-input", {
                  invalid: errors.name
                })}
              />
              <span className="red-text">{errors.name}</span>
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