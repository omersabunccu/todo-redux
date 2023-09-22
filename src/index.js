import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// Actions hold: events like , remove, add, markAsComplete, increment, decrement, delete, search, filter
// reducer: decides what to do based on action fired from actions, then updates redux-Store
// Store: holds entire App state variables, Once reducer updates store
// UI, App, Components: shows late changes in Store
// REducer: main decision maker


