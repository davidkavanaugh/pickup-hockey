import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../helpers';
import { alertActions } from '../actions';
import { PrivateRoute } from '../components';
import PlayerLogin from './components/Player/PlayerLogin';
import ManagerLogin from './components/Manager/ManagerLogin';
import ManagerUpcomingGames from './components/Manager/ManagerUpcomingGames';
import ManagerRegister from './components/Manager/ManagerRegister';





class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div>
                {alert.message &&
                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                }
                <Router history={history}>
                    <div>
                        <PrivateRoute path="/manager/upcoming-games" component={ManagerUpcomingGames} />
                        <Route exact path="/" component={PlayerLogin} />
                        <Route path="/manager/login" component={ManagerLogin} />
                        <Route path="/manager/register" component={ManagerRegister} />
                    </div>
                </Router>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

export default connect(mapStateToProps)(App);
