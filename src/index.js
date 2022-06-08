import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import * as serviceWorker from 'serviceWorker';
import App from 'App';

import './assets/font-awesome/css/all.min.css';
import './assets/font-awesome/css/fontawesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/styles/main.scss';

export const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
