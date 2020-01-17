import React from 'react';
import ReactDOM from 'react-dom';
import Skiller from './Skiller'

class App extends React.Component {
  render() {
    return (
      <div>
        <Skiller/>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App name="React" />, document.getElementById('react-skills-app'))
});
