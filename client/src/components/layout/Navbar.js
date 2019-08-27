import React from "react";
import { Link } from 'react-router-dom'
import Icon from '../../images/icon.jpg';
import Sidebar from './Sidebar'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Header from './Header';

const Navbar = ({ auth }) => (
 
  <div className="navbar">  
    <Link className='icon' to='/'>
      <img src={Icon} className='icon' alt='website icon' />
    </Link>

    <Header />

    {auth.isAuthenticated === true ? (
      
        <Sidebar />
  
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

