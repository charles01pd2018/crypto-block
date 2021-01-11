import React from 'react';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { hydrate, render } from "react-dom";
import sslRedirect from 'heroku-ssl-redirect';
import express from 'express';

import App from './App';
import * as serviceWorker from './serviceWorker';

import './assets/scss/style.scss';

const app = express();
const history = createBrowserHistory();

const rootElement = document.getElementById('root');
const appRoute = (
  <Router history={history}>
    <App />
  </Router>
);

//ssl redirect
app.use(sslRedirect());

if (rootElement.hasChildNodes()) {
  hydrate(appRoute, rootElement);
} else {
  render(appRoute, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
