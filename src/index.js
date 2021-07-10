import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { StrictMode } from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './Service/Reducer/Index';

const store = createStore(rootReducer)
// console.log(store)

ReactDOM.render(
    <Provider store = {store}>
      <App/>
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();