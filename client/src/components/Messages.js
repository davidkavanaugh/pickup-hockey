import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Messages extends Component {
  render() {
    return (
      <div className="center">
            <h3 className='righteous'>
              messages works
            </h3>
      </div>
    );
  }
}

Messages.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Messages);