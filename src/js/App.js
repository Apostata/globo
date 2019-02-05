import React, { Component, Fragment as F } from 'react';
import Section from './Section';

export default class App extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    const result = fetch('/json').then(data => data.json());
    result.then(data => this.setState({
      data,
    }));
  }
  render() {
    const data = this.state.data;
    const renderSections = (sections) => {
      return sections.map((section, idx) =><Section key={idx} {...section} />);
      // console.log(sections);
    };
    return (
      <F>
        {data !== null ? renderSections(data.section) : null}
      </F>

    );
  }
}
