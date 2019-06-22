import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Spacex extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      loading: false,
      launches: [],
      s_launches: [],
      f_launches: [],
      future_launches: []
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    axios.get('https://api.spacexdata.com/v3/launches')
        .then( res => {
          this.setState({launches: res.data}); //Loading false should be at the end of any logic. Might need to be moved in future!
          this.setAllSuccessfulLaunches();
          this.setAllFailedLaunches();
          this.setAllFutureLaunches();
          this.setState({loading: false});
        })
        .catch( err => {
          console.log(err)
        });

  }

  setAllSuccessfulLaunches() {
    console.log("Calculation Successful Launches");
    let that = this;

    this.state.launches.forEach(function (item) {
      if (item.launch_success === true) {
        that.setState({s_launches: [...that.state.s_launches, item]})
      }
    });
  }

  setAllFailedLaunches() {
    console.log("Calculation Failed Launches");
    let that = this;

    this.state.launches.forEach(function (item) {
      if (item.launch_success === false) {
        that.setState({f_launches: [...that.state.f_launches, item]})
      }
    });
  }

  setAllFutureLaunches() {
    console.log("Calculation Future Launches");
    let that = this;

    this.state.launches.forEach(function (item) {
      if (item.upcoming === true) {
        that.setState({future_launches: [...that.state.future_launches, item]})
      }
    });
  }

  render() {
    if (!this.state.loading)
      return (
          <div>
            <ShowTotalCount launches={this.state.launches}/>
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
      <div>
        Total Launches Including Planned: {props.launches.length}
        {Object.keys(total_by_mission).map(function(key) {
          return (
              <div>
                {key}: {total_by_mission[key]}
              </div>
          );
        })}
      </div>
  )
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
      <Spacex name="React" />, document.getElementById('reactSpaceX'))
});
