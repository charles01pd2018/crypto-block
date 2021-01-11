import React from 'react';
import { createBrowserHistory } from "history";
import { hydrate, render } from "react-dom";
import HttpsRedirect from 'react-https-redirect';

import App from './App';
import * as serviceWorker from './serviceWorker';

import './assets/scss/style.scss';

const history = createBrowserHistory();

const rootElement = document.getElementById('root');
const appRoute = (
  <HttpsRedirect history={history}>
      <App />
  </HttpsRedirect>
);

if (rootElement.hasChildNodes()) {
  hydrate(appRoute, rootElement);
} else {
  render(appRoute, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
