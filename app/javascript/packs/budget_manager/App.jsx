import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: gon.expenses,
      incomes: gon.incomes,
      loans: gon.loans,
      stocks: gon.stocks
    };
  }

  initCards(count, title, color) {
    const collor = `info-box ${color}`;

    return(
      <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
        <div className={collor}>
          <i className="fa fa-cloud-download"></i>
          <div className="count">{count}</div>
          <div className="title">{title}</div>
        </div>
      </div>
    )
  }

  render() {
    const state = this.state;
    return (
      <div>
        <div className="row">
          {this.initCards(1000, 'Total Expenses', 'red-bg')}
          {this.initCards(4300, 'Income', 'green-bg')}
          {this.initCards(4300, 'Dept', 'dark-bg')}
          {this.initCards(60, 'Ratio', 'blue-bg')}
        </div>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App name="React" />, document.getElementById('react-budget'))
});
