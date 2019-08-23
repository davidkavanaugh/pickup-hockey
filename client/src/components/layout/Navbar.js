import React, { Component } from "react";
import { Link } from "react-router-dom";
import Icon from '../../images/icon.jpg';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Link 
          to='/'
        >
          <img src={Icon} className='icon' alt='website icon' />
        </Link>
        <Link
          to="/"
          className="header"
        >
          Pickup Hockey
        </Link>
        <span className='spacer'></span>
      </div>
    );
  }
}

export default Navbar;