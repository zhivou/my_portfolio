import React from 'react'

const ScrollSections = (props) => {
  const id = `section-${props.exp.sort}`;
  const left = props.position;

  const card = () => {
    return(
      <div>
        <div className="pp-timeline-arrow"></div>
        <div className="card-container">
          <div className="pp-timeline-card-title-wrap text-center">
            <h2 className="pp-timeline-card-title font_white">{props.exp.title}</h2>
          </div>
          <div className="card-body-container p-4">
            <h3>{props.exp.organization}</h3>
            <div className="timeline-card-date">Started: {props.exp.date_started}, Ended: {props.exp.date_ended}</div>
            <div className="timeline-card-content"><p>{props.exp.exp_body}</p></div>
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
          <div className="time-line-marker p-0 m-0 center"></div>
        </div>
        <div className="col-5 message" id={!left ? id : ''}>
          {!left ? card() : ''}
        </div>
      </div>
  );
};

ScrollSections.propTypes = {
  exp: PropTypes.object.isRequired,
};

export default ScrollSections

// Note: Here I think is better to build invisible sections based on a window size. So when the sroll
// spy hits it, it will change a class for exp element 1 lvl above.
