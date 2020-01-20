import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollSections from './ScrollSections'
import { Controller, Scene, Tween } from 'react-scrollmagic';
import './style'

class ExpSlider extends Component {
  constructor(props){
    super(props);
  }

  render(){
    let left = true;

    const sections = (
      this.props.exp.map(experience => {
        left = !left
          return(
            <div className={ left ? 'row justify-content-start' : 'row justify-content-end' }>
            <Controller>
              <Scene duration={100} indicators>
                <Tween>
                  <div className="col-6 p-4"><ScrollSections exp={experience}/></div>
                </Tween>
              </Scene>
            </Controller>
            </div>
          )
      })
    );

    return (
      <div className="exp-wrapper">
        <div id="first-slide"></div>
        <div className="container text-center display-3 mb-3">Experience</div>
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
