import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy'
import PropTypes from 'prop-types';
import ScrollSections from './ScrollSections'
import './actions'

class ExpSlider extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const sections = (
      this.props.exp.map(experience => (
          <div className="col-6">
            <ScrollSections exp={experience}/>
          </div>
      ))
    );

    return (
      <div>
        { sections }
        <Scrollspy items={ ['section-1', 'section-2', 'section-3'] }
                   onUpdate={(el) => {
                     console.log(el)
                   }}>
          <li><a href="#section-1">section 1</a></li>
          <li><a href="#section-2">section 2</a></li>
          <li><a href="#section-3">section 3</a></li>
        </Scrollspy>

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

export default ExpSlider
