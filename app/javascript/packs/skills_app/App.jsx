import React from 'react';
import ReactDOM from 'react-dom';
import ExpSlider from './ExpSlider'
import { exp } from "./demo_exp";
import ActionForm from "./ActionForm"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { exp: [] };

    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div>
        <ActionForm handleChange={this.handleChange} />
        <ExpSlider exp={ exp }/>
      </div>
    );
  }

  handleChange(e) {
    console.log(e.target.id + ": " + e.target.value)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App name="React" />, document.getElementById('react-skills-app'))
});
