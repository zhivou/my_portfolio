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
      dti: gon.dti,
      totalExpenses: gon.totalExpenses
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

  initAllExpensesTable(){
    const exps = this.state.totalExpenses ? this.state.totalExpenses : [];

    return(
      <div className="p-4 m-4">
        <section className="panel">
          <header className="panel-heading">
            All Expenses
          </header>
          <table className="table table-hover">
            <thead>
            <tr>
              <th>Name</th>
              <th>Monthly Payment</th>
              <th>Type</th>
              <th>Notes</th>
            </tr>
            </thead>
            <tbody>

            {exps.map(exp => (
              <tr key={exp.financial_type + exp.name}>
                <td>{exp.name}</td>
                <td>{exp.monthly_payment}</td>
                <td>{exp.financial_type}</td>
                <td>{exp.notes}</td>
              </tr>
              ))
            }

            </tbody>
          </table>
        </section>
      </div>
    )
  }

  initIncomeTable(){
    const incomes = this.state.incomes ? this.state.incomes : [];

    return(
      <div className="p-4 m-4">
        <section className="panel">
          <header className="panel-heading">
            Income
          </header>
          <table className="table table-hover">
            <thead>
            <tr>
              <th>#</th>
              <th>Source Name</th>
              <th>Monthly Income</th>
              <th>Year Income</th>
              <th>Notes</th>
              <th>Type</th>
            </tr>
            </thead>
            <tbody>

            {incomes.map(inc => (
              <tr key={inc.id}>
                <td>{inc.id}</td>
                <td>{inc.source_name}</td>
                <td>{inc.monthly_income}</td>
                <td>{inc.year_income}</td>
                <td>{inc.notes}</td>
                <td>{inc.name}</td>
              </tr>
            ))
            }

            </tbody>
          </table>
        </section>
      </div>
    )
  }

  initExpensesTable() {
    const expenses = this.state.expenses ? this.state.expenses : [];

    return(
      <div className="p-4 m-4">
        <section className="panel">
          <header className="panel-heading">
            Expenses
          </header>
          <table className="table table-hover">
            <thead>
            <tr>
              <th>#</th>
              <th>Source Name</th>
              <th>Monthly Payment</th>
              <th>Year Debt</th>
              <th>Notes</th>
              <th>Type</th>
            </tr>
            </thead>
            <tbody>

            {expenses.map(exp => (
              <tr key={exp.id}>
                <td>{exp.id}</td>
                <td>{exp.exp_name}</td>
                <td>{exp.monthly_payment}</td>
                <td>{exp.year_amount}</td>
                <td>{exp.notes}</td>
                <td>{exp.name}</td>
              </tr>
            ))
            }

            </tbody>
          </table>
        </section>
      </div>
    )
  }

  initLoanTable() {
    const loans = this.state.loans ? this.state.loans : [];

    return(
      <div className="p-4 m-4">
        <section className="panel mb-0">
          <header className="panel-heading">
            Loans
          </header>
          <table className="table table-hover">
            <thead>
            <tr>
              <th>#</th>
              <th>Loan with</th>
              <th>Monthly Payment</th>
              <th>Term</th>
              <th>APR</th>
              <th>Amount</th>
              <th>Maturity Date</th>
              <th>Maturity Amount</th>
              <th>Notes</th>
              <th>Type</th>
              <th colSpan="3"></th>
            </tr>
            </thead>
            <tbody>

            {loans.map(lon => (
              <tr key={lon.name + '_' + lon.id}>
                <td>{lon.id}</td>
                <td>{lon.org_name}</td>
                <td>{lon.monthly_payment}</td>
                <td>{lon.months}</td>
                <td>{lon.apr}</td>
                <td>{lon.amount}</td>
                <td>{lon.maturity_date}</td>
                <td>{lon.maturity_amount}</td>
                <td>{lon.notes}</td>
                <td>{lon.name}</td>
                <td><a href={`/loans/${lon.id}`}>Show</a></td>
                <td><a href={`/loans/${lon.id}/edit`}>Edit</a></td>
                <td><a data-confirm="Are you sure?" rel="nofollow" data-method="delete" href={`/loans/${lon.id}`}>Destroy</a></td>
              </tr>
            ))
            }

            </tbody>
          </table>
        </section>
        <div><a href="/loans/new" className="btn btn-outline-dark btn-block btn-sm">New Loan</a></div>
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
        <div className="row">
          <div className="col-12 ">
            {this.initExpensesTable()}
          </div>
        </div>
        <div className="row">
          <div className="col-12 ">
            {this.initLoanTable()}
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
