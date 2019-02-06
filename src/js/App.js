import React, { Component, Fragment as F } from 'react';
import Section from './Section';

export default class App extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    const result = fetch('/json')
      .then(data => data.json())
      .catch(() => {});
    result
      .then(data => this.setState({
        data,
      }))
      .catch(() => {});
  }

  render() {
    const { data } = this.state;
    const renderSections = (sections) => {
      return sections.map((section, idx) => <Section key={idx} {...section} />);
      // console.log(sections);
    };
    return (
      <F>
        {data !== null ? renderSections(data.section) : null}
      </F>

    );
  }
}
