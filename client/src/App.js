import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './style.css'

import PlayerLogin from './components/Player/PlayerLogin';
import ManagerLogin from './components/Manager/ManagerLogin';
import ManagerUpcomingGames from './components/Manager/ManagerUpcomingGames';





class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Route path="/manager/upcoming-games" component={ManagerUpcomingGames} />
                        <Route exact path="/" component={PlayerLogin} />
                        <Route path="/manager/login" component={ManagerLogin} />
                    </div>
                </Router>
            </div>
        );
    }
}



export default App
