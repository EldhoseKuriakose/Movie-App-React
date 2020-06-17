import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';

//function logger(obj, next, action)
//logger(obj)(next)(action)
// const logger = function({ dispatch, getState }) {
//   return function(next) {
//     return function(action) {
      
//     }
//   }
// }

const logger = ({ dispatch, getState }) => (next) => (action) => {
  //middleware code
  console.log('ACTION_TYPE = ', action.type);
  next(action);
}

const store = createStore(rootReducer, applyMiddleware(logger));
console.log('store', store);

ReactDOM.render(
  <React.StrictMode>
    <App store={ store } />
  </React.StrictMode>,
  document.getElementById('root')
);