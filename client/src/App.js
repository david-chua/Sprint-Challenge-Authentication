import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import './App.css';


import Login from './login/Login';
import Jokes from './jokes/Jokes';
import Register from './register/Register';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <NavLink to="/register">Sign Up</NavLink>
            &nbsp; | &nbsp;
            <NavLink to="/login">Login</NavLink>
            &nbsp; | &nbsp;
            <NavLink to="/jokes">Jokes</NavLink>
          </nav>
        </header>
        <main>
          <Route path="/register" component={ Register } />
          <Route path="/login" component={ Login } />
          <Route path="/jokes" component={ Jokes } />

        </main>
      </div>
    );
  }
}

export default withRouter(App);
