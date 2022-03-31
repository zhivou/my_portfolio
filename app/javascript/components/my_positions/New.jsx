import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types"
import Form from "./Form"
import axios from "axios"

class New extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    axios.post(this.props.path, {
      my_position: {
      }
    })
    .then( res => {
      console.log(res)
    })
    .catch( err => {
      console.log(err);
    });
  }

  render() {
    return (
      <React.Fragment>
        <div><h4>Add new Position</h4></div>
        <Form handleSubmit={this.handleSubmit}/>
      </React.Fragment>
    );
  }
}

New.propTypes = {
  path: PropTypes.string,
  authenticityToken: PropTypes.string
};
export default New
