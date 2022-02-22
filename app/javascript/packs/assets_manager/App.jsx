import React from 'react';
import ReactDOM from 'react-dom';
import PieChart from '../budget_manager/PieChart'

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assets: gon.assets,
    };
  }

  createAssetPie(){
    const data = [];
    const labels = [];
    let total = 0;

    this.state.assets.forEach(function (item) {
      data.push(parseFloat(item.amount));
      labels.push(item.name);
      total = total + parseFloat(item.amount);
    });

    return(
      this.initChart(labels, data, total, 'Assets Pie', total)
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
    return(
      <>
      <div className="row">
        <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 pl-1 pr-1">
          {this.createAssetPie()}
        </div>
      </div>
      </>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App name="React" />, document.getElementById('react-asset'))
});
