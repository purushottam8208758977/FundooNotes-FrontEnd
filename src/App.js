//this file is invoked after index.js
import React from 'react';
import {Registration} from './components/registration'
import {Login} from './components/login'
import './App.css';
import './Login.css'

function App() { // App is the component 
  return (
    <div>
      <Login></Login>
    </div>
  );
}

export default App;
