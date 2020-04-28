import React from 'react';
const Section = (props) => (
  <section className={`${props.name} container`}>{props.children}</section>
);
export default Section;
