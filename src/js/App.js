/* eslint-disable class-methods-use-this */

export default class App {
  // eslint-disable-next-line class-methods-use-this
  getData() {
    return fetch('/json').then(data => data.json());
  }

  renderContainer(section) {
    return `
    <div class="container">
      ${this.renderRow(section)}
    </div>
    `;
  }

  renderSection(section, element, position) {
    const sectionMarkup = `
    <section class="section ${section.name}">
      ${this.renderContainer(section)}
    </section>`;
    // eslint-disable-next-line no-param-reassign
    element.insertAdjacentHTML(position, sectionMarkup);
  }

  renderRow(section) {
    const secName = section.name;
    const articles = section.data;
    let divisor = secName === 'main' ? 3 : 5;
    let rowType = 'commons';

    // eslint-disable-next-line consistent-return
    return articles.map((article, idx) => {
      const line = idx + 1;

      if (secName === 'main' && line === 5) {
        divisor = 5;
      }

      if (line % divisor === 0) {
        if (line !== articles.length) {
          rowType = this.verifyMainSection(secName, line);
          return `
          </div>
          <div class="row ${rowType}">
          ${this.renderArticle(article, rowType)}
          `;
        }
        return `
        </div>
        `;
      }

      if (line === 1) {
        rowType = this.verifyMainSection(secName, line);

        if (line === articles.length) {
          return `
          <div class="row ${rowType}">
            ${this.renderArticle(article, rowType)}
          </div>
          `;
        }

        return `
        <div class="row ${rowType}">
        ${this.renderArticle(article, rowType)}
        `;

      }

      return `${this.renderArticle(article, rowType)}`;
    }).join('');
  }

  renderArticle(article, rowType) {
    return `
    <article class="col col-12 ${rowType === 'commons' ? 'col-md-3' : 'col-md-6'} article">
      <div class="article__image">
        <img src="assets/media/${article.image}"  alt="nome">
      </div>

      <div class="article__data__title">
        <label class="article__label">${article.label}</label>
        <h3 class="article__title">${article.title}</h3>
      </div>
      <div class="article__data__body">
        <p class="article__desc">
          ${article.description}
        </p>
        <a class="article__ver" href="${article.url}">
            <i class="fas fa-share-square"></i>
        </a>
      </div>
    </article>
`;
  }

  verifyMainSection(name, line) {
    if (name === 'main') {
      if (line === 3) {
        return 'secondary';
      }
      if (line === 5) {
        return 'commons';
      }
      return 'primary';
    }
    return 'commons';
  }
}
