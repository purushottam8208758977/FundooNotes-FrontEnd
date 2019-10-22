//this file is invoked after index.js
import React, { Component } from 'react';
import { Registration } from './components/registration'
import { ForgetPassword } from './components/forgetPassword'
import {ResetPassword} from './components/resetPassword'
import {Dashboard} from './components/dashboard'
import { Login } from './components/login'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

class App extends Component { // App is the component 
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Login} ></Route> 
            <Route path="/registration" component={Registration} ></Route>
            <Route path="/accountRecovery" component={ForgetPassword} ></Route>
            <Route path="/resetPassword" component={ResetPassword} ></Route>
            <Route path="/home" component={Dashboard}></Route>"
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

// class App extends Component { // App is ts
export default App;
