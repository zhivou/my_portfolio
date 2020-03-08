import React, { Component } from 'react';
import fa from './fa-branch.png';


class ScrollSections extends Component {
  constructor(props){
    super(props);
  }

  componentDidUpdate() {
  }

  render(){
    const id = `section-${this.props.exp.sort}`;
    const left = this.props.position;
    const timelineId = `timeline-start-${this.props.exp.sort}`;

    const card = () => {
      return(
        <div>
          <div className="pp-timeline-arrow"></div>
          <div className="card-container">
            <div className="pp-timeline-card-title-wrap text-center">
              <h2 className="pp-timeline-card-title font_white">{this.props.exp.title}</h2>
            </div>
            <div className="card-body-container p-4">
              <h3>{this.props.exp.organization}</h3>
              <div className="timeline-card-date">Started: {this.props.exp.date_started}, Ended: {this.props.exp.date_ended}</div>
              <div className="timeline-card-content"><p>{this.props.exp.exp_body}</p></div>
            </div>
          </div>
        </div>
      )
    };

    return (
      <div className="row message-container align-items-center">
        <div className="col-5 message" id={left ? id : ''}>
          {left ? card() : ''}
        </div>
        <div className="col-2 m-5 mr-1 p-0 center">
          <div className="time-line-marker p-0 m-0 center text-center" id={timelineId}>
            <img src={fa} alt="Logo" id="brunch" className="center" />
          </div>
        </div>
        <div className="col-5 message" id={!left ? id : ''}>
          {!left ? card() : ''}
        </div>
      </div>
    )
  }
}

ScrollSections.propTypes = {
  exp: PropTypes.object.isRequired,
};

export default ScrollSections