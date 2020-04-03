import React from 'react';
import ReactDOM from 'react-dom';
import ChartComponent from './Chart'

const chartData = {
  labels: [],

  datasets:[
    {
      label:'Current',
      data: [gon.totalCurrentInvestments],
      backgroundColor: "rgba(0, 177, 106, 1)"
    },
    {
      label:'Initial',
      data: [gon.totalOriginalInvestments],
      backgroundColor: "rgba(231, 76, 60, 1)"
    },
  ]

};

const step = Math.abs((gon.totalCurrentInvestments - gon.totalOriginalInvestments) * 4);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: chartData,
      shares: gon.shareInfo
    };
  }

  initTotalInvestmentsCard() {
    return (
      <div>
        <div className="card">
          <div className="card-header">
            Current Investments
          </div>
          <div className="card-body">
            <ChartComponent
              chartData={this.state.chartData}
              chartName="Investing"
              legendPosition="bottom"
              stepSize={step}
            />
          </div>
        </div>
      </div>
    )
  }

  initSecondCard() {
    return (
      <div>
        <div className="card">
          <div className="card-header">
            Links
          </div>
          <div>
            <div className="list-group">
              <div className="p-3">Main Links</div>
              <a className="list-group-item" href="/stocks/new">Purchase new Stock</a>
              <a className="list-group-item" href="/stocks/action/sell_index">Sell Stock</a>
              <div className="p-3">External Links</div>
              <a className="list-group-item" href="https://robinhood.com/">My Robinhood</a>
              <a className="list-group-item" href="https://money.cnn.com/data/fear-and-greed/">Fear Rating</a>
              <a className="list-group-item" href="https://finance.yahoo.com/">Yahoo Finance</a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  initSharesCards() {
    const state = this.state;

    return(
      <div>
        {state.shares.map(sh => (
          <div className="card">
            <div className="card-header">
              {sh.quote.company_name}
            </div>
            <div>
              {sh.quote.change_percent_s}
            </div>
          </div>
        ))
        }
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            {this.initTotalInvestmentsCard()}
            {this.initSharesCards()}
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            {this.initSecondCard()}
          </div>
        </div>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App name="React" />, document.getElementById('react-stock'))
});
