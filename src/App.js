import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/register';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const logout = () => {
    window.localStorage.removeItem('token');
  };

  return (
    <>
      <Router>
        <div className="logoAndHeading"></div>
          <Switch>
            <PrivateRoute path='/dashboard' component={Dashboard} />
            <Route path="/login">
              <LoginForm />
            </Route>
            <Route path="/register" component={RegisterForm}/>
            <Route exact path="/" component={LoginForm} />
          </Switch>
      </Router>
    </>
  );
}

export default App;
