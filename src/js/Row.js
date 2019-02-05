import React from 'react';
import Article from './Article';

const row = (props) => {
  let classes = 'row ';
  let bootsClass = 'col-md-6';


  if (props.classe === 'main') {
    switch (props.idx) {
      case 0 :
        classes += 'primary';
        break;
      case 1 :
        classes += 'secondary';
        break;
      default :
        classes += 'commons';
        bootsClass = 'col-md-3';
        break;
    }
  } else {
    classes += 'commons ';

    if (props.idx > 0) {
      classes +=  props.isVisible;
    }
    bootsClass = 'col-md-3';
  }

  const renderArticle = (artigos)=>{
    return artigos.map((article, idx) =>(
      <Article
        key={idx}
        classe={bootsClass}
        title={article.title}
        label={article.label}
        image={article.image}
        description={article.description}
        url={article.url}
      />
    ))
  }

  return (
    <div className={classes}>
      {renderArticle(props.row)}
    </div>
  )
};

export default row;
