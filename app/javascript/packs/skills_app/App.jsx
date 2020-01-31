import React from 'react';
import ReactDOM from 'react-dom';
import ExpSlider from './ExpSlider'
import { exp } from "./demo_exp";
import ActionForm from "./ActionForm"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { exp: [], formHolder: null };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {

    return (
      <div>
        <ActionForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <ExpSlider exp={ this.state.exp }/>
      </div>
    );
  }

  handleChange(e) {
    this.setState({
      formHolder: {
        ...this.state.formHolder,
        [e.target.id]: e.target.value
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const holder = this.state.formHolder;

    if (!(
      holder.hasOwnProperty('company') &&
      holder.hasOwnProperty('about') &&
      holder.hasOwnProperty('title') &&
      holder.hasOwnProperty('start_date') &&
      holder.hasOwnProperty('end_date') &&
      holder.hasOwnProperty('sort')
    )) {
      console.log("Nothing was submitted! Make sure you filled out all input fields.");
      return;
    }

    this.setState(state => ({
      exp: state.exp.concat(this.state.formHolder),
      formHolder: null
    }));

    $("#exp-adder-form")[0].reset();
    console.log("New Experience has been successfully added.")
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App name="React" />, document.getElementById('react-skills-app'))
});
