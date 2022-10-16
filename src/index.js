import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import i18n from './i18n'; // eslint-disable-line no-unused-vars

import App from './App';
import { store } from './redux/store';

import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

reportWebVitals();
