import React from 'react';
import Row from './Row';

const container = (props) => {

  const renderRows = (props) => {
    const rows = [];
    const articles = props.data;

    if (props.name === 'main') {
      rows.push(articles.splice(0, 2));
      rows.push(articles.splice(0, 2));
      rows.push(articles);
    } else {
      rows.push(articles.splice(0, 4));
      rows.push(articles);
    }

    return rows.map((row, idx)=> <Row key={idx} classe={props.name} idx={idx} row={row} />);
  }

  const addMore = (
    <div className="row">
      <div className="col col-12 section__divisor">
        <a className="section__divisor__loadMore" href="#">{props.name}<i className="fas fa-plus"></i></a>
      </div>
    </div>
  )

  return (
    <div className="container">
      {props.name !== 'main' ? <h2 className="section__title">{props.name}</h2> : null}
      {props.chidren ? props.chidren : renderRows(props)}
      {props.name !== 'main' ? addMore : null}
    </div>
  );

};

export default container;
