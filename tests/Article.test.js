import React from 'react';
import { configure, shallow, render} from 'enzyme';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import 'jsdom-global/register';
import fetch from 'node-fetch';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';
import Article from '../src/js/Article';

configure({ adapter: new Adapter() });

chai.use(sinonChai);
chai.use(chaiEnzyme());
global.fetch = fetch;

const props = {
  description: 'description',
  image: 'image.jpeg',
  label: 'label',
  title: 'title',
  url: '#',
};

const bootsClass = 'col-md-3';
const idx = 0;

const articleMarkup = (
  <article className="col col-12 col-md-3 article">
  <div className="article__image">
    <img src="assets/media/image.jpeg" alt="title" />
  </div>
  <div className="article__data__title">
    <label className="article__label">label</label>
    <h3 className="article__title">title</h3>
  </div>
  <div className="article__data__body">
    <p className="article__desc">description</p><a className="article__ver" href="#"><i className="fas fa-share-square" /></a>
  </div>
  </article>)
;

describe('<Article /> Component', () => {
  it('Should render correct markup given data', () => {
    const article = shallow(<Article key={idx} classe={bootsClass} {...props} />);
    expect(article).to.contain(articleMarkup);
  });
});
