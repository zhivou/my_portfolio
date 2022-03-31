import React from "react"
import PropTypes from "prop-types"

class Edit extends React.Component {
  render () {
    return (
      <React.Fragment>
        Edit Form goes here
      </React.Fragment>
    );
  }
}

Edit.propTypes = {
  greeting: PropTypes.string
};
export default Edit
