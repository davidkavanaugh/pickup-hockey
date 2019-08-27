import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import PlayHockey from "./components/PlayHockey";
import MyGames from "./components/MyGames";
import LockerRoom from "./components/LockerRoom";
import Profile from './components/Profile/index.js';
import Messages from "./components/Messages";


import "./style.css";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/play-hockey" component={PlayHockey} />
              <PrivateRoute exact path="/my-games" component={MyGames} />
              <PrivateRoute exact path="/locker-room" component={LockerRoom} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute exact path="/messages" component={Messages} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
