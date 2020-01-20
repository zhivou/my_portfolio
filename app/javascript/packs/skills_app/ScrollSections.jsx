import React from 'react'

const ScrollSections = (props) => {
  const id = `section-${props.exp.sort}`
  return (
    <div id={ id } className="message mine">
        <div>{props.exp.title}</div>
        <div>{props.exp.company}</div>
        <div>Started: {props.exp.start_date}, Ended: {props.exp.end_date}</div>
        <div>{props.exp.about}</div>
    </div>
  );
};

ScrollSections.propTypes = {
  exp: PropTypes.object.isRequired,
};

export default ScrollSections

// Note: Here I think is better to build invisible sections based on a window size. So when the sroll
// spy hits it, it will change a class for exp element 1 lvl above.
