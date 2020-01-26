import React from 'react';
import ReactDOM from 'react-dom';
import ExpSlider from './ExpSlider'
import { exp } from "./demo_exp";

class App extends React.Component {
  render() {
    return (
      <div>
        <ExpSlider exp={ exp }/>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App name="React" />, document.getElementById('react-skills-app'))
});
