import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { restoreSession } from './store/csrf';
import { Provider } from 'react';
import configureStore from './store/index.js';
import { BrowserRouter } from 'react-router-dom'

const store = configureStore();

let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
let initialState = {};

  if (currentUser) {
    initialState = {
      users: {
        [currentUser.id]: currentUser
      }
    };
  };


const initializeApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}; 

restoreSession().then(initializeApp)

