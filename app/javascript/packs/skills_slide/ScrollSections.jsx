import React from 'react'

const ScrollSections = (props) => {
  const id = `section-${props.exp.sort}`;
  const left = props.position;

  const card = () => {
    return(
      <div>
        {props.exp.title}
        {props.exp.organization}
        Started: {props.exp.date_started}, Ended: {props.exp.date_ended}
        {props.exp.exp_body}
      </div>
    )
  };

  return (
      <div className="row">
        <div className="col-5 message " id={left ? id : ''}>
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
