import React from 'react'

const ScrollSections = (props) => {
  const id = `section-${props.exp.sort}`
  return (
    <section id={ id }>
      {props.exp.title}
    </section>
  );
};

ScrollSections.propTypes = {
  exp: PropTypes.object.isRequired,
};

export default ScrollSections

// Note: Here I think is better to build invisible sections based on a window size. So when the sroll 
// spy hits it, it will change a class for exp element 1 lvl above.
