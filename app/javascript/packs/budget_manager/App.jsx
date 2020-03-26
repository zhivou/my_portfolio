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

  initLinksCard(){
    return(

      <section className="panel">
        <header className="panel-heading">
          Main Links
        </header>
        <div className="list-group">
          <a className="list-group-item" href="/loans/new">Create New Loan</a>
          <a className="list-group-item" href="/expenses/new">Create New Expense</a>
          <a className="list-group-item" href="/incomes/new">Create New Income</a>
          <a className="list-group-item" href="/stocks/new">Created New Stock</a>
          <a className="list-group-item" href="/financial_types/new">Add Financial Type</a>
        </div>
      </section>

    )
  }

  initIncomeTable(){
    return(
      <div className="p-3 m-3">
        <section className="panel">
          <header className="panel-heading">
            All Income
          </header>
          <table className="table table-hover">
            <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Sumon</td>
              <td>Mosa</td>
              <td>@twitter</td>
            </tr>
            </tbody>
          </table>
        </section>
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
          <div className="col-md-3">
            {this.initLinksCard()}
          </div>
        </div>
        <div className="row">
          <div className="col-12 ">
            {this.initIncomeTable()}
          </div>
        </div>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App name="React" />, document.getElementById('react-budget'))
});
