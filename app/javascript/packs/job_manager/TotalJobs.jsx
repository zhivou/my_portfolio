import React from 'react';
import ReactDOM from 'react-dom';
import Doughnut from './DoughnutChart'

class TotalJobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: gon.jobs
    };

    this.loadTotalJobs = this.loadTotalJobs.bind(this);
  }

  loadTotalJobs(){
    const jobs = this.state.jobs;

    const chart = this.initChart(
      ['Total Jobs'],
      jobs.length,
      undefined,
      'Total Applied',
      jobs.length < 10 ? '0' + `${jobs.length}` : jobs.length
    );
    return(chart)
  }

  loadSuccessfulJobs(){
    const jobs = this.state.jobs;
    const successfulJobs = jobs.filter(job => job.interview && job.replied);

    const chart = this.initChart(
      ['Successful Jobs', 'Failed Jobs'],
      successfulJobs.length,
      jobs.length,
      'Successful Jobs',
      successfulJobs.length < 10 ? '0' + `${successfulJobs.length}` : successfulJobs.length
    );
    return(chart)
  }

  initChart(labels, data, dataOffset, chartName, total){
    const dataSet = data && dataOffset ? [data, dataOffset - data] : [data];

    return(
      <div className="chartItem">
        <Doughnut
          chartData={
            {
              labels: labels,
              datasets: [{
                label: '# of Votes',
                data: dataSet,
                backgroundColor: [
                  'rgba(25,54,65)',
                  'rgba(255, 255, 255, 0)'],
                borderColor: [
                  'rgba(25,54,65)',
                  'rgba(255, 99, 132, 1)'],
                borderWidth: 10}]
            }
          }
          displayLegend={false}
          chartName={chartName}
        />
        <h3 className="total-count">{total}</h3>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.loadTotalJobs()}
        {this.loadSuccessfulJobs()}
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <TotalJobs name="React" />, document.getElementById('total-jobs'))
});
