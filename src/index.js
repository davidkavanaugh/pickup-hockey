import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PlayerLogin from './components/Player/PlayerLogin';
import ManagerLogin from './components/Manager/ManagerLogin';
import ManagerUpcomingGames from './components/Manager/ManagerUpcomingGames';
import './style.css';
import { Auth0Provider } from "./react-auth0-wrapper";
import config from "./auth_config.json";

ReactDOM.render(
    <Auth0Provider domain={config.domain} client_id={config.clientId}>
        <Router>
            <Route path='/' exact component={PlayerLogin} />
            <Route path='/manager/login/' component={ManagerLogin} />
            <Route path='/manager/upcoming-games/' component={ManagerUpcomingGames} />            
        </Router>
    </Auth0Provider>, 
document.getElementById('root'));

