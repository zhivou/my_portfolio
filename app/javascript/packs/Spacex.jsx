import React from 'react';
import ReactDOM from 'react-dom';
import App from './spacex/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
      <App name="React" />, document.getElementById('reactSpaceX'))
});