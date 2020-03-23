import React from 'react';
import ReactDOM from 'react-dom';
import GoogleCalendar from "./GoogleCalendar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: gon.expenses,
      incomes: gon.incomes,
      loans: gon.loans,
      stocks: gon.stocks,
      allMonthlyExpenses: gon.allMonthlyExpenses,
      allMonthlyIncome: gon.allMonthlyIncome,
      totalDept: gon.totalDept,
      dti: gon.dti
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
          {this.initCards(`$${state.allMonthlyExpenses}`, 'Total Expenses', 'red-bg', this.icons.lines)}
          {this.initCards(state.allMonthlyIncome, 'Income', 'green-bg', this.icons.plus)}
          {this.initCards(state.totalDept, 'Dept', 'dark-bg', this.icons.exclamation)}
          {this.initCards(state.dti, 'DTI', 'blue-bg', this.icons.leaf)}
        </div>
        <div className="row">
          <div className="col-lg-9 col-md-12">
            <GoogleCalendar></GoogleCalendar>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App name="React" />, document.getElementById('react-budget'))
});
