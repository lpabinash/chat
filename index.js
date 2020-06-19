import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
// import LoginForm from './Login/Login';
// import Signup from './Signup/Signup';
import LoginForm from './Signup/LoginForm'
import Dashboard from './Dashboard/Dashboard';

const firebase = require("firebase");
require("firebase/firestore"); // Required for side-effects?????

firebase.initializeApp({
  apiKey: "AIzaSyAD9teAr4zlYjxgyOO_I4zixp99uXVH_us",
  authDomain: "chatbox-623a5.firebaseapp.com",
  databaseURL: "https://chatbox-623a5.firebaseio.com",
  projectId: "chatbox-623a5",
  storageBucket: "chatbox-623a5.appspot.com",
  messagingSenderId: "651856488113",
  appId: "1:651856488113:web:3888e62f5b38be30b26490",
  measurementId: "G-649KPRNGFR"
});

const routing = (
        <Router>
          <div id='routing-container'>
            <Switch>
            {/* <Route path='/login' component={LoginForm}></Route> */}
            {/* <Route path='/signup' component={Signup}></Route> */}
            
            <Route path='/dashboard' component={Dashboard}></Route>
            <Route path='/' component={LoginForm}></Route>
            {/* <Route path='/login' component={LoginForm}></Route> */}
            </Switch>
          </div>
        </Router>

);

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
