import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types"
import Form from "./Form"
import axios from "axios"

class New extends React.Component {
  constructor(props) {
    super(props);

    this.state = { formHolder: { crypto: false } };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = this.state.formHolder;

    if(!form.symbol){ return };
    if(!form.shares){ return };
    if(!form.average_price){ return };

    axios.post(this.props.path, {
      my_position: this.state.formHolder
    })
    .then( res => {
      console.log(res)
    })
    .catch( err => {
      console.log(err);
    });
  }

  handleChange(e) {
    if (e.target.id === "crypto") {
      this.handleToggle();
      return
    }

    this.setState({
      formHolder: {
        ...this.state.formHolder,
        [e.target.id]: e.target.value
      }
    });
  }

  handleToggle() {
    this.setState({
      formHolder: {
        ...this.state.formHolder,
        crypto: !this.state.formHolder.crypto
      }
    });
  }

  render() {
    return (
      <>
        <div><h4>Add new Position</h4></div>
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          submitName="Create New Position"
          formHolder={this.state.formHolder}
        />
      </>
    );
  }
}

New.propTypes = {
  path: PropTypes.string
};
export default New
