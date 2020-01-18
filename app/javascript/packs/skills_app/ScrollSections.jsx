import React from 'react'

const ScrollSections = () => (
  <div>
    <section id="section-1">section 1</section>
    <section id="section-2">section 2</section>
    <section id="section-3">section 3</section>
  </div>
)

ScrollSections.propTypes = {
  exp: PropTypes.object.isRequired,
};

export default ScrollSections
