import React, { Component, Fragment as F} from 'react';
import Container from './Container';
import Advertising from './Advertising';

const section = (props) => {
  return (
    <F>
      <section className={'section ' + props.name}>
        <Container {...props} />
      </section>
      {props.name === 'main' ? <Advertising/> : null }
    </F>
  );
}

export default section;
