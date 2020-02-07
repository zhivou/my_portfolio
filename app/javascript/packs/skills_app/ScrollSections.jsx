import React from 'react'

const ScrollSections = (props) => {
  const id = `section-${props.exp.sort}`;

  return (
      <div id={id} className="message mine">
        <div><h4>
          {props.exp.title}
        </h4></div>
        <div>{props.exp.organization}</div>
        <div>Started: {props.exp.date_started}, Ended: {props.exp.date_ended}</div>
        <div><small>{props.exp.exp_body}</small></div>
      </div>
  );
};

ScrollSections.propTypes = {
  exp: PropTypes.object.isRequired,
};

export default ScrollSections

// Note: Here I think is better to build invisible sections based on a window size. So when the sroll
// spy hits it, it will change a class for exp element 1 lvl above.
