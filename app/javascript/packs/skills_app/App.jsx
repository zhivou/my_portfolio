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
    this.bringDefaults = this.bringDefaults.bind(this);
    this.clearExp = this.clearExp.bind(this);
  }

  render() {

    return (
      <div className="container">
        <div className="text-center card m-3">
          <div className="h3 m-5">
            TOTAL RECORDS: <span className="badge-pill badge-dark">{this.state.exp.length}</span>
            <span className="sr-only">Total Records</span>
          </div>
        </div>
        <div className="text-center">
          <button onClick={this.bringDefaults}
                  className="m-1 btn btn-light">Demo Data</button>
          <button onClick={this.clearExp}
                  className="m-1 btn btn-light">Clear</button>
          <hr/>
          <small id="emailHelp" className="text-muted">
            Use Demo button to populate default experience records or Clear to clear all records. Keep scrolling
            down to see the animation.
          </small>
        </div>
        <ActionForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <ExpSlider exp={ this.state.exp }/>
      </div>
    );
  }

  clearExp(e) {
    e.preventDefault();
    this.setState({
      exp: [],
      formHolder: null
    });
  }

  bringDefaults(e) {
    e.preventDefault();
    this.setState({
      exp: exp,
      formHolder: null
    });
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
      holder.hasOwnProperty('organization') &&
      holder.hasOwnProperty('exp_body') &&
      holder.hasOwnProperty('title') &&
      holder.hasOwnProperty('date_started') &&
      holder.hasOwnProperty('date_ended') &&
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
