import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className='center'>
        <div className='form_white-bg'>
          <div className='catchphrase'>
            Play. More. Hockey.
          </div>
            <Link
              to="/login"
              className="white-btn"
            >
              Log In
            </Link>
            <span className="or">
              or
            </span>
            <Link
              to="/register"
              className="red-btn"
            >
              Register
            </Link>
        </div>
      </div>
    );
  }
}

export default Landing;