import React from 'react';
import { configure, shallow, render} from 'enzyme';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import fetch from 'node-fetch';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';
import Section from '../src/js/Section';
import Container from '../src/js/Container';

configure({ adapter: new Adapter() });

chai.use(sinonChai);
chai.use(chaiEnzyme());
global.fetch = fetch;

const section = {
  name: 'main',
  data: [{
    description: 'description',
    image: 'image.jpeg',
    label: 'label',
    title: 'title',
    url: '#',
  }],
};

describe('<Section /> Component', () => {
  it('Should render correct markup given data', () => {

    const sectionJsx = shallow(<Section {...section} />);
    expect(sectionJsx.find(Container)).to.have.lengthOf(1);
  });
});
