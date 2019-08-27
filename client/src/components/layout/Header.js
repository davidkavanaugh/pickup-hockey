import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

class Header extends Component {
    static propTypes = {
      location: PropTypes.object.isRequired
    }
  
    render() {
      const { location } = this.props 
      let header = '';

      switch(location.pathname) {
        case '/':
            header = 'Pickup Hockey'
            break;
        case '/register':
            header = 'Pickup Hockey'
            break;
        case '/profile':
            header = 'Profile'
            break;
        case '/play-hockey':
            header = 'Play Hockey'
            break;
        case '/my-games':
            header = 'My Games'
            break;
        case '/locker-room':
            header = 'Locker Room'
            break;       
        case '/messages':
            header = 'Messages'
            break;                 
        default:
          header = 'Pickup Hockey'
      }
      return (
        <h3 className='header'>{header}</h3>
      )
    }
  }
  
  export default withRouter(Header)