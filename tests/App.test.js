import React from 'react';
import { configure, shallow, render} from 'enzyme';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import fetch from 'node-fetch';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';
import App from '../src/js/App';
import Section from '../src/js/Section';

configure({ adapter: new Adapter() });

chai.use(sinonChai);
chai.use(chaiEnzyme());
global.fetch = fetch;

const data = {
  section: [{
    name: 'main',
    data: [{
      description: 'description',
      image: 'image.jpeg',
      label: 'label',
      title: 'title',
      url: '#',
    }],
  }],
};

describe('<App /> Component', () => {
  //const fetchedStub = sinon.stub(global, 'fetch');
  //fetchedStub.resolves({ json: () => ({ data }) });

  it('Should render correct markup given data', () => {
    const sectionJsx = shallow(<App />);
    sectionJsx.setState({ data });
    expect(sectionJsx.find(Section)).to.have.lengthOf(1);
  });

  //fetchedStub.restore();
});
