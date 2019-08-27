import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Profile extends Component {
  render() {
    const { user } = this.props.auth;

    return (
      <div className="center">
            <h3 className='righteous'>
              {user.name}
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