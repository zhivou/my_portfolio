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

const colors = {
  red: "rgba(231, 76, 60, 1)",
  green: "rgba(0, 177, 106, 1)"
};

const step = Math.abs((gon.totalCurrentInvestments - gon.totalOriginalInvestments) * 4);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: chartData,
      shares: gon.shareInfo,
      totalActive: gon.totalActive,
      totalSold: gon.totalSold,
      purchaseHistory: gon.purchaseHistory
    };
  }

  initTotalInvestmentsCard() {
    return (
      <div>
        <div className="card mb-2">
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
        <div className="card mb-2">
          <div className="card-header">
            Links
          </div>
          <div>
            <div className="list-group">
              <a className="list-group-item" href="/stocks/new">Purchase new Stock</a>
              <a className="list-group-item" href="/stocks/action/sell_index">Sell Stock</a>
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
          <div className="card mb-2" key={sh.quote.company_name}>
            <div className="card-header">
              <div className="row">
                <div className="col-8">
                  <div className="h5">{sh.quote.company_name}</div>
                  <div>Shares: {sh.totalShares}</div>
                </div>
                <div className="col-3 text-right">
                  <div style={{color: sh.quote.change_percent_s.includes("+") ? colors.green : colors.red }}>
                    {sh.quote.change_percent_s}
                  </div>
                  <div>${sh.quote.latest_price}</div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-3">
                  <img src={sh.logo.url} style={{width: "100px", height: "100px"}} className="img-thumbnail"/>
                </div>
                <div className="col-8 align-self-center text-center">
                  <div className="h4">Current equity: ${sh.totalShares * sh.quote.latest_price}</div>
                </div>
              </div>
            </div>
          </div>
        ))
        }
      </div>
    )
  }

  initTotalCard(){
    return(
      <div className="card mb-2">
        <div className="card-header">
          Total shares
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 align-self-center text-center border-right">
            <div className="text-center m-3">Current Shares:</div>
            <div className="rate-wrapper font_white h1 m-3 text-center">{this.state.totalActive}</div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 align-self-center text-center">
            <div className="text-center m-3">Sold Shares:</div>
            <div className="rate-wrapper font_white h1 m-3 text-center">{this.state.totalSold}</div>
          </div>
        </div>
      </div>
    )
  }

  initPurchaseHistoryCard(){
    return(
      <div className="card mb-2">
        <div className="card-header">
          Purchase History
        </div>
        <div>
          <table className="table table-hover mb-0">
            <thead>
            <tr>
              <th>Name</th>
              <th>Shares</th>
              <th>Purchased Date</th>
              <th>Total</th>
            </tr>
            </thead>
            <tbody>

            {this.state.purchaseHistory.map(his => (
              <tr key={his.n}>
                <td>{his.n}</td>
                <td>{his.count}</td>
                <td>{his.date_trunc}</td>
                <td>{his.total}</td>
              </tr>
            ))
            }

            </tbody>
          </table>
        </div>
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
            {this.initTotalCard()}
            {this.initPurchaseHistoryCard()}
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
