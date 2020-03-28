import React from 'react';
import ReactDOM from 'react-dom';
import GoogleCalendar from "./GoogleCalendar";
import PieChart from './PieChart'

const backgroundColor = [
  '#197278',
  '#50514F',
  '#F25F5C',
  '#FFE066',
  '#70C1B3',
  '#0E3F42',
  '#845A6D',
  '#6E75A8',
  '#8D91C7',
  '#B0DAF1',
  '#0E3F42',
  '#F7DBA7',
  '#F1AB86',
  '#C57B57',
  '#ECFEE8',
  '#197278',
  '#50514F',
  '#F25F5C',
  '#FFE066',
  '#70C1B3',
  '#0E3F42',
  '#845A6D',
];

const icons = {
  thumbUp: 'fa fa-thumbs-o-up',
  plus: 'fa fa-plus',
  lines: 'fa fa-align-left',
  exclamation: 'fa fa-exclamation-triangle',
  leaf: 'fa fa-envira'
};

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

      <section className="card panel mb-0">
        <header className="panel-heading p-3">
          <h3>Main Links</h3>
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
      <div className="p-4">
        <section className="card panel mb-0">
          <header className="panel-heading p-3">
            <h3>Income</h3>
          </header>
          <table className="table table-hover mb-0">
            <thead>
            <tr>
              <th>#</th>
              <th>Source Name</th>
              <th>Monthly Income</th>
              <th>Year Income</th>
              <th>Notes</th>
              <th>Type</th>
              <th colSpan="3"></th>
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
                <td><a href={`/incomes/${inc.id}`} className="btn btn-outline-dark btn-sm">Show</a></td>
                <td><a href={`/incomes/${inc.id}/edit`} className="btn btn-outline-dark btn-sm">Edit</a></td>
                <td><a data-confirm="Are you sure?" rel="nofollow" data-method="delete" href={`/incomes/${inc.id}`} className="btn btn-outline-warning btn-sm">Destroy</a></td>
              </tr>
            ))
            }

            </tbody>
          </table>
          <div><a href="/incomes/new" className="btn btn-outline-dark btn-block btn-sm">New Income</a></div>
        </section>
      </div>
    )
  }

  initExpensesTable() {
    const expenses = this.state.expenses ? this.state.expenses : [];

    return(
      <div className="p-4">
        <section className="card panel mb-0">
          <header className="panel-heading p-3">
            <h3>Expenses</h3>
          </header>
          <table className="table table-hover mb-0">
            <thead>
            <tr>
              <th>#</th>
              <th>Source Name</th>
              <th>Monthly Payment</th>
              <th>Year Debt</th>
              <th>Notes</th>
              <th>Type</th>
              <th colSpan="3"></th>
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
                <td><a href={`/expenses/${exp.id}`} className="btn btn-outline-dark btn-sm">Show</a></td>
                <td><a href={`/expenses/${exp.id}/edit`} className="btn btn-outline-dark btn-sm">Edit</a></td>
                <td><a data-confirm="Are you sure?" rel="nofollow" data-method="delete" href={`/expenses/${exp.id}`} className="btn btn-outline-warning btn-sm">Destroy</a></td>
              </tr>
            ))
            }

            </tbody>
          </table>
          <div><a href="/expenses/new" className="btn btn-outline-dark btn-block btn-sm">New Expense</a></div>
        </section>
      </div>
    )
  }

  initLoanTable() {
    const loans = this.state.loans ? this.state.loans : [];

    return(
      <div className="p-4">
        <section className="card panel mb-0">
          <header className="panel-heading p-3">
            <h3>Loans</h3>
          </header>
          <table className="table table-hover mb-0">
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
                <td><a href={`/loans/${lon.id}`} className="btn btn-outline-dark btn-sm">Show</a></td>
                <td><a href={`/loans/${lon.id}/edit`} className="btn btn-outline-dark btn-sm">Edit</a></td>
                <td><a data-confirm="Are you sure?" rel="nofollow" data-method="delete" href={`/loans/${lon.id}`} className="btn btn-outline-warning btn-sm">Destroy</a></td>
              </tr>
            ))
            }

            </tbody>
          </table>
          <div><a href="/loans/new" className="btn btn-outline-dark btn-block btn-sm">New Loan</a></div>
        </section>
      </div>
    )
  }

  createIncomePie(){
    const data = [];
    const labels = [];
    let total = 0;

    this.state.incomes.forEach(function (item) {
      data.push(parseFloat(item.monthly_income));
      labels.push(item.source_name);
      total = total + parseFloat(item.monthly_income);
    });

    return(
      this.initChart(labels, data, total, 'Income Pie', total)
    )
  }

  initChart(labels, data, dataOffset, chartName, total){
    return(
      <div className="card m-2 p-2 pt-5 chartItem">
        <PieChart
          chartData={
            {
              labels: labels,
              datasets: [{
                label: '# of Votes',
                data: data,
                backgroundColor: backgroundColor,
                borderColor: [],
                borderWidth: 0}]
            }
          }
          displayLegend={false}
          chartName={chartName}
          fatSize='100%'
        />
        <h3 className="text-center m-2">{total}</h3>
      </div>
    )
  }

  render() {
    const state = this.state;
    return (
      <div>
        <div className="row">
          {this.initCards(`$${state.allMonthlyExpenses}`, 'Total Expenses', 'red-bg', icons.lines)}
          {this.initCards(state.allMonthlyIncome, 'Income', 'green-bg', icons.plus)}
          {this.initCards(state.totalDept, 'Dept', 'dark-bg', icons.exclamation)}
          {this.initCards(state.dti, 'DTI', 'blue-bg', icons.leaf)}
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
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            {this.createIncomePie()}
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
