/* eslint-disable class-methods-use-this */

export default class App {
  // eslint-disable-next-line class-methods-use-this
  getData() {
    return fetch('/json').then(data => data.json());
  }

  setClickOnMore() {
    document.addEventListener('click', (event) => {
      if (!event.target.classList.contains('section__divisor__loadMore')) return;
      event.stopPropagation();
      event.preventDefault();
      // eslint-disable-next-line no-console
      const hideRow = event.target.parentNode.parentNode.parentNode.querySelector('.hide');
      if (hideRow) {
        hideRow.classList.remove('hide');
      }
    }, false);
  }

  renderContainer(section) {
    const secName = section.name;
    return `
    <div class="container">
      ${secName !== 'main' ? `<h2 class="section__title">${secName}</h2>` : ''}
      ${this.renderRow(section)}
    </div>
    ${secName !== 'main' ? `
      <div class="row">
        <div class="col col-12 section__divisor">
          <a class="section__divisor__loadMore" href="#">${secName}<i class="fas fa-plus"></i></a>
        </div>
      </div>
      ` : ''}
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
    <article class="col col-12 ${rowType === 'commons' || rowType === 'commons hide' ? 'col-md-3' : 'col-md-6'} article">
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
    if (line >= 5) {
      return 'commons hide';
    }
    return 'commons';
  }
}
