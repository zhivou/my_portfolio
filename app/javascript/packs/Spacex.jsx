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
          this.setState({launches: res.data, loading: false}); //Loading false should be at the end of any logic. Might need to be moved in future!
          this.setAllSuccessfulLaunches();
          this.setAllFailedLaunches();
          this.setAllFutureLaunches();
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
    console.log("Calculation Failed Launches");
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
            <ShowLaunchesCount launches={this.state.launches}/>
          </div>
      );
    else
      return (<p>Be Hold, fetching data may take some time :)</p>); //Can be changed on face pic or Modal popup or spiner
  }
}

const ShowLaunchesCount = (props) => {
  return(
      <div>
        Total Launches: {props.launches.length}
        {
          props.launches.map(item => (
            <div>
              {item.details}
            </div>
          ))
        }
      </div>
  )
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
      <Spacex name="React" />, document.getElementById('reactSpaceX'))
});
