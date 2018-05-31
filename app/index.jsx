import '@babel/polyfill';
import 'bootstrap/dist/css/bootstrap.min.css';
// import faker from 'faker';
// import cookies from 'js-cookie';
// import io from 'socket.io-client';
import gon from 'gon'; // eslint-disable-line
import { zipObject } from 'lodash';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import App from './components/App';

const preloadedState = {
  channels: zipObject(gon.channels.map(c => c.id), gon.channels),
  messages: zipObject(gon.messages.map(m => m.id), gon.messages),
  currentChannelId: gon.currentChannelId,
};
const ext = window.__REDUX_DEVTOOLS_EXTENSION__; // eslint-disable-line
const devtoolMiddleware = ext ? ext() : noop => noop;
const store = createStore(
  reducers,
  preloadedState,
  compose(
    applyMiddleware(thunk),
    devtoolMiddleware,
  ),
);

// const socket = io();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('chat'),
);
