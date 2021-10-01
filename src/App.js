import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import AddReimbForm from './components/AddReimbForm'
import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm';
import PendingReimbs from './components/PendingReimbs';
import RegisterForm from './components/register';
import PrivateRoute from './components/PrivateRoute';

function App() {
  let [trigger, setTrigger] = useState(false);

  return (
    <>
      <Router>
        <div className="logoAndHeading"></div>
          <Switch>
          <PrivateRoute path='/dashboard'>
             <Dashboard trigger={trigger} setTrigger={setTrigger} /> 
          </PrivateRoute>
          <PrivateRoute path='/addreimb' component={AddReimbForm} />
            <Route path="/login">
              <LoginForm />
            </Route>
            <PrivateRoute path="/pendingreimb" component={PendingReimbs} />
            <Route path="/register" component={RegisterForm}/>
            <Route exact path="/" component={LoginForm} />
          </Switch>
      </Router>
    </>
  );
}

export default App;
