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
    return (
      <div className="chartItem">
        <Doughnut
          chartData={
            {
              labels: ['Jobs'],
              datasets: [{
                label: '# of Votes',
                data: [jobs.length ? jobs.length : 1],
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
          chartName='Total Jobs:'
        />
        <h3 className="total-count">{jobs.length < 10 ? '0' + `${jobs.length}` : jobs.length}</h3>
      </div>
    )
  }

  loadSuccessfulJobs(){
    const jobs = this.state.jobs;
    const successfulJobs = jobs.filter(job => job.interview && job.replied);

    const chart = this.initChart(
      'Successful Jobs',
      successfulJobs.length,
      jobs.length,
      'Successful Jobs',
      successfulJobs.length < 10 ? '0' + `${successfulJobs.length}` : successfulJobs.length
    );
    return(chart)
  }

  initChart(labels, data, dataOffset, chartName, total){
    return(
      <div className="chartItem">
        <Doughnut
          chartData={
            {
              labels: [labels],
              datasets: [{
                label: '# of Votes',
                data: [data, dataOffset],
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
