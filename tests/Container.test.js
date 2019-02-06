import React from 'react';
import { configure, shallow, render} from 'enzyme';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import 'jsdom-global/register';
import fetch from 'node-fetch';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';
import Container from '../src/js/Container';
import Row from '../src/js/Row';

configure({ adapter: new Adapter() });

chai.use(sinonChai);
chai.use(chaiEnzyme());
global.fetch = fetch;

const props = {
  name: 'main',
  data: [{
    description: 'description',
    image: 'image.jpeg',
    label: 'label',
    title: 'title',
    url: '#',
  }],
};

describe('<Container /> Component', () => {
  it('Should render correct markup given data', () => {

    const container = shallow(<Container {...props} />);
    expect(container.find(Row)).to.have.lengthOf(3);
  });
});
