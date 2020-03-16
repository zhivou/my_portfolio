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

    return (
      <div className="chartItem">
        <Doughnut
          chartData={
            {
              labels: ['Successful Jobs'],
              datasets: [{
                label: '# of Votes',
                data: [Array.isArray(successfulJobs) ? successfulJobs.length : 1],
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
          chartName='Successful Jobs:'
        />
        <h3 className="total-count">{successfulJobs.length < 10 ? '0' + `${successfulJobs.length}` : successfulJobs.length}</h3>
      </div>
    )
  }

  initChart(){
    return(
      <div>
        a
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
