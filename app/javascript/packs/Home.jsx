import React from 'react';
import ReactDOM from 'react-dom';
import App from './home/App'
import 'semantic-ui-css/semantic.min.css';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
      <App name="React" />, document.getElementById('reactHome'))
});