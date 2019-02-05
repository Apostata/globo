import React from 'react';

const article = (props) => {
  let classes = 'row ';

  console.log(props)

  return (
    <article className={`col col-12 ${props.classe} article`}>

      <div className="article__image">
        <img src={`assets/media/${props.image}`}  alt={props.title} />
      </div>

      <div className="article__data__title">
        <label className="article__label">{props.label}</label>
        <h3 className="article__title">{props.title}</h3>
      </div>
      <div className="article__data__body">
        <p className="article__desc">
            {props.description}
        </p>
        <a className="article__ver" href={props.url}>
          <i className="fas fa-share-square"></i>
        </a>
      </div>
    </article>
  )
};

export default article;
