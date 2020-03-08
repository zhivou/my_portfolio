import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollSections from './ScrollSections'

class ExpSlider extends Component {
  constructor(props){
    super(props);
  }

  componentDidUpdate() {
    let controllerR = new ScrollMagic.Controller();

    this.props.exp.map(experience => {
      const id = `section-${experience.sort}`;

      new ScrollMagic.Scene({
        triggerElement: `#${id}`,
        offset: -50 // move trigger to center of element
      })
        .setClassToggle(`#${id}`, "visible") // add class to reveal
        .addIndicators()
        .addTo(controllerR);
    })
  }

  render(){
    let left = true;

    const sections = (
      this.props.exp.map(experience => {
        left = !left;
          return(
            <div key={experience.sort}>
              <div>
                <ScrollSections exp={experience} position={left}/>
              </div>
            </div>
          )
      })
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

export default ExpSlider
