import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollSections from './ScrollSections'

class ExpSlider extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    var controllerR = new ScrollMagic.Controller();

    this.props.exp.map(experience => {
      const id = `section-${experience.sort}`;

      new ScrollMagic.Scene({
        triggerElement: `#${id}`,
        offset: 50 // move trigger to center of element
      })
        .setClassToggle(`#${id}`, "visible") // add class to reveal
        .offset(-200)
        .addTo(controllerR);
    })
  }

  render(){
    let left = true;

    const sections = (
      this.props.exp.map(experience => {
        left = !left;
          return(
            <div className={ left ? 'row justify-content-start' : 'row justify-content-end' } key={experience.sort}>
              <div className="col-6 p-4">
                <ScrollSections exp={experience}/>
              </div>
            </div>
          )
      })
    );

    return (
      <div className="exp-wrapper">
        <div className="container">
          { sections }
        </div>
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
