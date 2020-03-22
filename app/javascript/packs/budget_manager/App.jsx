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
    this.icons = {
      thumbUp: 'fa fa-thumbs-o-up',
      plus: 'fa fa-plus',
      lines: 'fa fa-align-left',
      exclamation: 'fa fa-exclamation-triangle',
      leaf: 'fa fa-envira'
    }
  }

  initCards(count, title, color, icon) {
    const colorClass = `info-box ${color}`;

    return(
      <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
        <div className={colorClass}>
          <i className={icon}></i>
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
          {this.initCards(1000, 'Total Expenses', 'red-bg', this.icons.lines)}
          {this.initCards(4300, 'Income', 'green-bg', this.icons.plus)}
          {this.initCards(4300, 'Dept', 'dark-bg', this.icons.exclamation)}
          {this.initCards(60, 'Ratio', 'blue-bg', this.icons.leaf)}
        </div>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App name="React" />, document.getElementById('react-budget'))
});
