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
// Global Action Types
const ADD_CONTACT = "ADD_CONTACT";
const ADD_JOB = "ADD_JOB";
const IS_FORM_VISIBLE = "IS_FORM_VISIBLE";

// Basic States
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

// Action Creators
function addContact(name, phone, email) {
    return {
        type: ADD_CONTACT,
        payload: {
            name,
            phone,
            email
        }
    }
}

function addJob(job) {
    return {
        type: ADD_JOB,
        payload: job
    }
}

function changeFormVisibility() {
    return {
        type: IS_FORM_VISIBLE
    }
}

// Reducers

function contactOrganizer(state=contactState, action) {
    const newState = [...state];

    switch (action.type) {
        case ADD_CONTACT:
            newState.push(action.payload)
            break;
        default:
            console.log('No action type');
            break;
    }

    return newState;
}

function jobOrganizer(state=jobsState, action) {
    const newState = [...state];
    console.log('in job organizer');
    switch (action.type) {
        case ADD_JOB:
            console.log('In add job');
            newState.push(action.payload);
            break;
        default:
            console.log('No match');
            break;
    }

    return newState;
}

function formSwitch(state=formState, action) {
    let newState = state;

    switch (action.type) {
        case IS_FORM_VISIBLE:
            newState = !state;
            break;
        default:
            console.log('Not changing formState');
            break;
    }

    return newState;
}

// Combine reducers together to make one store with multiple state parts
const rootReducer = combineReducers({
    contactOrganizer,
    jobOrganizer,
    formSwitch
});

// Initialize store to manage states
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Let's me do dispatches in console. Be sure to remove in production environment
window.store = store;

// If you want to add helper functions to browser console, do the following
window.changeFormVisibility = changeFormVisibility;

// Debug any changes to store or show any changes
store.subscribe(() => {
    console.table(store.getState());
});

// Dispatches and state changes
store.dispatch({type: "ADD_JOB", payload: "Developer"});
store.dispatch(addJob('Hero'));