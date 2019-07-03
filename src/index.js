import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './components/App';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' />
      <Route exact path='/palette/:id' />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
