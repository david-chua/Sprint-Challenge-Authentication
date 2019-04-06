import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import './App.css';

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
            <NavLink to="/users">Jokes</NavLink>
          </nav>
        </header>
        <main>

        </main>
      </div>
    );
  }
}

export default withRouter(App);
