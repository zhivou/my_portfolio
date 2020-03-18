import React from 'react';
import ReactDOM from 'react-dom';
import Doughnut from './DoughnutChart'

class TotalJobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: gon.jobs,
      pendingJobs: gon.pendingJob,
      expiredJobs: gon.expiredJob
    };
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
      <div className="card m-2 p-2 chartItem">
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
                borderWidth: 12}]
            }
          }
          displayLegend={false}
          chartName={chartName}
        />
        <h3 className="total-count">{total}</h3>
      </div>
    )
  }

  initWideCard(){
    const jobs = this.state.jobs;
    const total = jobs.filter(job => job);
    const allApplied = total.length;
    const invited = jobs.filter(job => job.interview).length;
    const calledBack = jobs.filter(job => job.replied).length;
    const pending = this.state.pendingJobs.length;
    const expire = this.state.expiredJobs.length;
    const successful = jobs.filter(job => job.interview && job.replied).length;
    const rate = (successful * 100) / total.length;

    return(
      <div className="card m-2 p-3" id="wide-card-wrapper">
        <div className="card-title">
          <h3 className="p-3 pb-2 m-0">General Statistics</h3>
        </div>
        <hr className="p-0 m-0"/>
        <div className="row p-3">
          <div className="col-6 border-right" id="statistic-wrapper">
            <div><b>{allApplied} - All Applied</b></div>
            <div>{successful} - Successful</div>
            <div>{invited} - Invited for Interview</div>
            <div>{calledBack} - Called Back</div>
            <div>{pending} - In Pending Status</div>
            <div>{expire} - Expired</div>
          </div>
          <div className="col-6">
            <div className="text-center m-3">Successful Rate:</div>
            <div className="rate-wrapper text-center font_white fluid h1">{parseInt(rate)}%</div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-6 text-right pr-0">
            {this.loadTotalJobs()}
            {this.loadSuccessfulJobs()}
          </div>
          <div className="col-5 pl-0">
            {this.initWideCard()}
          </div>
        </div>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <TotalJobs name="React" />, document.getElementById('total-jobs'))
});
