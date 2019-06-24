import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PlayerLogin from './Player/PlayerLogin';
import ManagerLogin from './Manager/ManagerLogin';

ReactDOM.render(
<Router>
    <Route path='/' exact component={PlayerLogin} />
    <Route path='/manager' component={ManagerLogin} />
</Router>, document.getElementById('root'));

