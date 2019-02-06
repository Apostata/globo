import React from 'react';
import { configure, shallow, render} from 'enzyme';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import 'jsdom-global/register';
import fetch from 'node-fetch';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';
import Row from '../src/js/Row';
import Article from '../src/js/Article';

configure({ adapter: new Adapter() });

chai.use(sinonChai);
chai.use(chaiEnzyme());
global.fetch = fetch;

const row = [{
  description: 'description',
  image: 'image.jpeg',
  label: 'label',
  title: 'title',
  url: '#',
}];

const name = 'nome';
const isRowVisible = true;
const idx = 0;


describe('<Row /> Component', () => {
  it('Should render correct markup given data', () => {

    const rowJsx = shallow(<Row key={`row-${idx}`} classe={name} idx={idx} row={row} isVisible={isRowVisible} />);
    expect(rowJsx.find(Article)).to.have.lengthOf(1);
  });
});
