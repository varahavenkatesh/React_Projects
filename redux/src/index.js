import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux';
import reducers from './store/reducers';
import promiseMiddleware from 'redux-promise';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreMiddleware = composeEnhancers(applyMiddleware(promiseMiddleware))(createStore);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStoreMiddleware(reducers)}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

