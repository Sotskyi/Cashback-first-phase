import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// import { I18nextProvider } from 'react-i18next';

import i18n from './i18n'; // eslint-disable-line no-unused-vars

import App from './App';
import { store } from './redux/store';

import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // <I18nextProvider i18n={i18n}>
  <Provider store={store}>
    <App />
  </Provider>,
  // </I18nextProvider>,
  document.getElementById('root'),
);

reportWebVitals();
