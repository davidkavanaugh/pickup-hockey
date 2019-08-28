import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import './style.css';

class Profile extends Component {
  render() {
    const { user } = this.props.auth;

    return (
      <div id='profile'>
        <h3 className='righteous'>
          {user.name}
        </h3>
        <h3 className='righteous'>
          {user.city}, {user.state}
        </h3>
      </div>
    );
  }
}

Profile.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Profile);