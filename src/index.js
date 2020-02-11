// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import { createStore, combineReducers } from 'redux';

const contactState = [
{
    name: "Jerry Smith",
    phone: "706-755-1498",
    email: "jsmith@gmail.com"
},
{
    name: "Sally Fields",
    phone: "555-555-5555",
    email: "sfields@aol.com"
},
{
    name: "Jane Doe",
    phone: "555-867-5309",
    email: "jdo@charter.net"
}
];

const jobsState = [
    "Senior Developer",
    "Junior Developer",
    "Intern Developer"
];

const formState = true;