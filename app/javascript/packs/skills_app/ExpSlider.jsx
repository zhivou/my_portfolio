import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'scrollmagic'
// import './actions'

class ExpSlider extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const sections = (
      this.props.exp.map(experience => (
          <div className="col-6">
            <p>{experience.title}</p>
          </div>
      ))
    );

    return (
      <div>
        { sections }
      </div>
    )
  }
}

ExpSlider.propTypes = {
  exp: PropTypes.array.isRequired,
  skin: PropTypes.string,
  effect: PropTypes.string
};

ExpSlider.defaultProps = {
  skin: "standard",
  effect: "standard"
};

let getMessage = () => console.log('Hello World');

export default ExpSlider
