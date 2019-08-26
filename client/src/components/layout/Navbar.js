import React, { Component } from "react";
import { Link } from 'react-router-dom'
import Icon from '../../images/icon.jpg';
import Hamburger from '../../images/hamburger.svg'
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Navbar = ({ component: Component, auth}) => (
  <div className="navbar">
    {auth.isAuthenticated === true ? (
      <Link to='/'>
        <img src={Hamburger} className='hamburger' alt='toggle menu' />
      </Link>
    ) : (
      <Link to='/'>
        <img src={Icon} className='icon' alt='website icon' />
      </Link>
    )
    }
    <Link to='/' className='header'>
      <h3>Pickup Hockey</h3>
    </Link>
    <span className='spacer'></span>
  </div>
);

Navbar.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Navbar);

