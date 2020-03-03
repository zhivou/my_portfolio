import React from 'react'

const ScrollSections = (props) => {
  const id = `section-${props.exp.sort}`;

  return (
      <div id={id} className="pp-timeline-card">
          <div className="pp-timeline-card-wrapper">
            <div className="pp-timeline-arrow"></div>
            <div className="pp-timeline-card">
              <div className="pp-timeline-card-title-wrap">
                <div className="pp-timeline-card-date"></div>
                <h2 className="pp-timeline-card-title">{props.exp.title}</h2>
                {props.exp.organization}
                Started: {props.exp.date_started}, Ended: {props.exp.date_ended}
              </div>
              <div className="pp-timeline-card-content"><p>{props.exp.exp_body}</p></div>
            </div>
          </div>
          <div className="pp-timeline-marker-wrapper">
            <div className="pp-timeline-marker">
              <span className="pp-icon"><i aria-hidden="true" className="fas fa-search"></i></span>
            </div>
          </div>
          <div className="pp-timeline-card-date-wrapper">
            <div className="pp-timeline-card-date"></div>
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
