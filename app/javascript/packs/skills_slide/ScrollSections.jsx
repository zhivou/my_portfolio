import React from 'react'

const ScrollSections = (props) => {
  const id = `section-${props.exp.sort}`;

  return (
      <div className="row">
        <div className="col-5 message" id={id}>
          {props.exp.title}
          {props.exp.organization}
          Started: {props.exp.date_started}, Ended: {props.exp.date_ended}
          {props.exp.exp_body}
        </div>
        <div className="col-2 m-5 p-0">
          <div className="time-line-marker"></div>
        </div>
        <div className="col-5 message" id={id}>
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
