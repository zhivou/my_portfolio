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
      chartData: chartData
    };
  }

  initTotalInvestmentsCard() {
    return (
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
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
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div className="card">
          <div className="card-header">
            Current Investments
          </div>
          <div className="card-body">
            Second Card
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className="row">
          {this.initTotalInvestmentsCard()}
          {this.initSecondCard()}
        </div>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App name="React" />, document.getElementById('react-stock'))
});
