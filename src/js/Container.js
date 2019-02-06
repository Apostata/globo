import React, { Component } from 'react';
import Row from './Row';

export default class Container extends Component {
  state = {
    isRowVisible: 'hide',
    rows: [],
  }

  componentDidMount() {
    const {name, data} = this.props;
    const rows =[];
    if (name === 'main') {
      rows.push(data.splice(0, 2));
      rows.push(data.splice(0, 2));
      rows.push(data);
    } else {
      rows.push(data.splice(0, 4));
      rows.push(data);
    }

    this.setState({
      rows,
    })
  }

  loadMore(e) {
    e.preventDefault();
    this.setState({
      isRowVisible: '',
    });
  }

  render() {
    const { name, children } = this.props;
    const { isRowVisible, rows } = this.state;

    const renderRows = () => {
      return rows.map((row, idx) => <Row key={`row-${idx}`} classe={name} idx={idx} row={row} isVisible={isRowVisible} />);
    }

    const addMore = (
      <div className = "row">
        <div className = "col col-12 section__divisor">
          <a className =" section__divisor__loadMore" href="#" onClick={(e)=>this.loadMore(e)}>{name}<i className="fas fa-plus"></i></a>
        </div>
      </div>
    );

    return (
      <div className="container">
        {name !== 'main' ? <h2 className="section__title">{name}</h2> : null}
        {children ? children : renderRows()}
        {name !== 'main' ? addMore : null}
      </div>
    );
  }
};
