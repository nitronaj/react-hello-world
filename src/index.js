import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import Welcome from './components/Welcome';
import Clock from './components/Clock';
import Toggle from './components/Toggle';




const element = (
  <div>
    <Welcome name="Nader" />
    <Welcome name="Cahal" />
    <Welcome name="Edite" />
    <Clock />
    <Clock />
    <Clock />
    <Toggle />
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);



