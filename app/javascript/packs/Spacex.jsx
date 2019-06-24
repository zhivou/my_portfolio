import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Countdown from 'react-countdown-now';
import ChartComponent from './react_charts/ChartComponent';

class Spacex extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      loading: true,
      launches: [],
      s_launches: [],
      f_launches: [],
      future_launches: [],
      next_launch: null,
      chartData:{}
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    axios.get('https://api.spacexdata.com/v3/launches')
        .then( res => {
          this.setState({launches: res.data});
          this.setAllSuccessfulLaunches();
          this.setAllFailedLaunches();
          this.setAllFutureLaunches();
          this.getNextLaunchTime();
          this.getChartData();
        })
        .catch( err => {
          console.log(err)
        });

  }

  setAllSuccessfulLaunches() {
    console.log("Calculating Successful Launches");
    let that = this;

    this.state.launches.forEach(function (item) {
      if (item.launch_success === true) {
        that.setState({s_launches: [...that.state.s_launches, item]})
      }
    });
  }

  setAllFailedLaunches() {
    console.log("Calculating Failed Launches");
    let that = this;

    this.state.launches.forEach(function (item) {
      if (item.launch_success === false) {
        that.setState({f_launches: [...that.state.f_launches, item]})
      }
    });
  }

  setAllFutureLaunches() {
    console.log("Calculating Future Launches");
    let that = this;

    this.state.launches.forEach(function (item) {
      if (item.upcoming === true) {
        that.setState({future_launches: [...that.state.future_launches, item]})
      }
    });
  }

  getNextLaunchTime() {
    let that = this;

    axios.get('https://api.spacexdata.com/v3/launches/next')
        .then( res => {
          that.setState({next_launch: res.data});
          that.setState({loading: false}); // Move this when needed
        })
        .catch( err => {
          console.log(err)
        });
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets:[
          {
            label:'Population',
            data:[
              617594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    });
  }

  render() {
    if (!this.state.loading)
      return (
          <div>
            <ShowTotalCount launches={this.state.launches}/>
            <br/>
            <ShowErroneousLaunches launches={this.state.f_launches}/>
            <br/>
            <ShowFutureLaunches
                launches={this.state.future_launches}
                next_launch={this.state.next_launch}
            />
            <ChartComponent chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom" />
          </div>
      );
    else
      return (<p>Be Hold, fetching data may take some time :)</p>); //Can be changed on face pic or Modal popup or spiner
  }
}

const ShowTotalCount = (props) => {
  let total_by_mission = {};

  props.launches.forEach( function(i) {
    if (total_by_mission[i.rocket.rocket_name]) {
      total_by_mission[i.rocket.rocket_name] += 1
    }
    else {
      total_by_mission[i.rocket.rocket_name] = 1
    }
  });

  console.log(total_by_mission);

  return(
      <div className="container">
        <div className="card">
          Total Launches
          <hr/>
          {props.launches.length}
          {Object.keys(total_by_mission).map(function(key) {
            return (
                <div key={key}>
                  {total_by_mission[key]} - {key}
                </div>
            );
          })}
        </div>
      </div>
  )
};

const ShowErroneousLaunches = (props) => {
  return(
      <div className="container">
        <div className="card">
          Total Failed Launches
          <hr/>
          {props.launches.length}
          {props.launches.map(item => (
            <div key={item.flight_number}>
              <p>
                {item.details}
              </p>
            </div>
          ))
          }
        </div>
      </div>
  )
};

const ShowFutureLaunches = (props) => {
  let total_by_mission = {};

  props.launches.forEach( function(i) {
    if (total_by_mission[i.rocket.rocket_name]) {
      total_by_mission[i.rocket.rocket_name] += 1
    }
    else {
      total_by_mission[i.rocket.rocket_name] = 1
    }
  });

  return(
      <div>
        <div className="container">
          <div className="card">
            Total Future Launches
            <hr/>
            {props.launches.length}
            {Object.keys(total_by_mission).map(function(key) {
              return (
                  <div key={key}>
                    {total_by_mission[key]} - {key}
                  </div>
              );
            })}
            <Countdown date={(Date.now(), props.next_launch.launch_date_utc)}/>
          </div>
        </div>
      </div>
  )
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
      <Spacex name="React" />, document.getElementById('reactSpaceX'))
});
