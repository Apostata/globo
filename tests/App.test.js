import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import fetch from 'node-fetch';
import 'jsdom-global/register';
import App from '../src/js/App';

chai.use(sinonChai);
global.fetch = fetch;

const position = 'afterbegin';

const section = {
  name: 'name',
  data: [
    {
      url: '#',
      label: 'label',
      title: 'title',
      description: 'description',
      image: 'image.jpg',
    },
  ],
};

const articleMarkup = `
    <article class="col col-12 col-md-3 article">
      <div class="article__image">
        <img src="assets/media/${section.data[0].image}"  alt="nome">
      </div>

      <div class="article__data__title">
        <label class="article__label">${section.data[0].label}</label>
        <h3 class="article__title">${section.data[0].title}</h3>
      </div>
      <div class="article__data__body">
        <p class="article__desc">
          ${section.data[0].description}
        </p>
        <a class="article__ver" href="${section.data[0].url}">
            <i class="fas fa-share-square"></i>
        </a>
      </div>
    </article>
`;

const rowMarkup = `
<div class="row commons">
  ${articleMarkup}
</div>
`;

const containerMarkup = `
<div class="container">
  <h2 class="section__title">${section.name}</h2>
  ${rowMarkup}
</div>
<div class="row">
  <div class="col col-12 section__divisor">
    <a class="section__divisor__loadMore" href="#">${section.name}<i class="fas fa-plus"></i></a>
  </div>
</div>
`;

describe('App', () => {
  let fetchedStub;
  const app = new App();

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    fetchedStub.resolves({ json: () => ({ section: [] }) });
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('Smoke test', () => {
    it('Should exist App', () => {
      expect(App).to.exist;
    });

    it('Should exist App', () => {
      expect(app.getData).to.exist;
    });
  });

  describe('getData', () => {
    it('Should call fetch function', () => {
      app.getData();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch from /json url', () => {
      app.getData();
      expect(fetchedStub).to.have.been.calledWith('/json');
    });

    it('Should return json data from getData Promise', () => {
      const result = app.getData();
      result.then((data) => {
        expect(data).to.be.deep.eql({ section: [] });
      });
    });
  });

  describe('renderArticle', () => {
    const div = document.createElement('div');
    const element = document.createElement('div');
    element.setAttribute('id', 'advertising');
    div.appendChild(element);

    it('Should render correct data given data', () => {
      const result = app.renderArticle(section.data[0], 'commons');
      expect(result).to.be.eql(articleMarkup);
    });
  });

  describe('renderRow', () => {
    const div = document.createElement('div');
    const element = document.createElement('div');
    element.setAttribute('id', 'advertising');
    div.appendChild(element);

    it('Should render correct data given data', () => {
      const resultRow = app.renderRow(section);
      expect(resultRow.replace(/\s/g, '')).to.be.eql(rowMarkup.replace(/\s/g, ''));
    });
  });

  describe('renderContainer', () => {
    const div = document.createElement('div');
    const element = document.createElement('div');
    element.setAttribute('id', 'advertising');
    div.appendChild(element);

    it('Should render correct data given data', () => {
      const resultContainer = app.renderContainer(section);
      expect(resultContainer.replace(/\s/g, '')).to.be.eql(containerMarkup.replace(/\s/g, ''));
    });
  });

  describe('renderSection', () => {
    const div = document.createElement('div');
    const element = document.createElement('div');
    element.setAttribute('id', 'advertising');
    div.appendChild(element);

    it('Should render correct data given data', () => {
      const finalMarkup = `
      <div id="advertising">
        <section class="section name">
          ${containerMarkup}
        </section>
      </div>
      `;
      app.renderSection(section, element, position);
      expect(div.innerHTML.replace(/\s/g, '')).to.be.eql(finalMarkup.replace(/\s/g, ''));
    });
  });

  describe('renderSection', () => {
    const div = document.createElement('div');
    const element = document.createElement('div');
    element.setAttribute('id', 'advertising');
    div.appendChild(element);

    it('Should render correct data given data', () => {
      const finalMarkup = `
      <div id="advertising">
        <section class="section name">
          ${containerMarkup}
        </section>
      </div>
      `;
      app.renderSection(section, element, position);
      expect(div.innerHTML.replace(/\s/g, '')).to.be.eql(finalMarkup.replace(/\s/g, ''));
    });
  });
});
