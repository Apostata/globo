// import Teste from './teste';

// const oples = new Teste();
// console.log(oples.sum(2));
import App from './App';

const element = document.getElementById('advertising');

const app = new App();
app.getData().then((data) => {
  // eslint-disable-next-line array-callback-return
  data.section.map((section) => {
    let beforeOrAfter = '';

    beforeOrAfter = section.name === 'main' ? 'beforebegin' : 'afterend';
    app.renderSection(section, element, beforeOrAfter);
  });
  app.setClickOnMore();
});
