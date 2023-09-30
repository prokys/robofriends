import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger'
import './index.css';
import App from './containers/App.jsx'
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { searchRobots, requestRobots } from './reducers';

const logger = createLogger();
const rootReducers = combineReducers({searchRobots, requestRobots})
const store = legacy_createStore(rootReducers, applyMiddleware(thunkMiddleware, logger));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
