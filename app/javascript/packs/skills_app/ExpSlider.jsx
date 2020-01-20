import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollSections from './ScrollSections'
import './style'
import ScrollMagic from 'scrollmagic'

class ExpSlider extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.exp.map(experience => {
      initScrollMagick(`section-${experience.sort}`);
    })
  }

  render(){
    let left = true;

    const sections = (
      this.props.exp.map(experience => {
        left = !left
          return(
            <div className={ left ? 'row justify-content-start' : 'row justify-content-end' }>
              <div className="col-6 p-4"><ScrollSections exp={experience}/></div>
            </div>
          )
      })
    );

    return (
      <div className="exp-wrapper">
        <div className="container text-center display-3 mb-3">Experience</div>
        <div className="container">
          { sections }
        </div>
      </div>
    )
  }
}

let initScrollMagick = (id) => {
  // init controller
  var controller = new ScrollMagic.Controller();

  debugger;
  // create a scene
  new ScrollMagic.Scene({
  		duration: 100,	// the scene should last for a scroll distance of 100px
  		offset: 50	// start this scene after scrolling for 50px
  	})
  	.setPin(`#${id}`) // pins the element for the the scene's duration
  	.addTo(controller); // assign the scene to the controller
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
