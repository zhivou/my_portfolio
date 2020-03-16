import React from 'react';
import ReactDOM from 'react-dom';
import Doughnut from './DoughnutChart'

class TotalJobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: gon.jobs
    };

  }

  componentDidMount() {
    this.setState({
      jobs: gon.jobs,
    });
  }

  render() {
    const jobs = this.state.jobs;

    return (
      <div>
        <div className="chartItem">
          <Doughnut
            chartData={
              {
                labels: ['Jobs'],
                datasets: [{
                  label: '# of Votes',
                  data: [jobs.length],
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
          <h3 className="total-count">{jobs.length}</h3>
        </div>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <TotalJobs name="React" />, document.getElementById('total-jobs'))
});
