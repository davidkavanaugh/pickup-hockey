import React from "react";
import { Link } from 'react-router-dom'
import Icon from '../../images/icon.jpg';
import Sidebar from './Sidebar'
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Navbar = ({ auth }) => (
  <div className="navbar">  
    <Link to='/'>
      <img src={Icon} className='icon' alt='website icon' />
    </Link>

    <h3 className='header'>Pickup Hockey</h3>

    {auth.isAuthenticated === true ? (
      <Link to='/'>
        <Sidebar />
      </Link>
      ) : (
        <span className='spacer'></span>
        )
    }
  </div>
);

Navbar.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Navbar);

