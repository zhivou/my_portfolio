import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Spacex extends React.Component {

  constructor(props){
    super(props);

    this.setAllSussessfulLaunches = this.setAllSussessfulLaunches.bind(this);
    this.state = {
      loading: false,
      launches: [],
      s_launches: []
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    axios.get('https://api.spacexdata.com/v3/launches')
        .then( res => {
          this.setState({launches: res.data, loading: false}); //Loading false should be at the end of any logic. Might need to be moved in future!
          this.setAllSussessfulLaunches()
        })
        .catch( err => {
          console.log(err)
        });

  }

  setAllSussessfulLaunches() {
    console.log("Calculation Sussccesful Launches");
    let that = this;

    this.state.launches.forEach(function (item) {
      if (item.launch_success === true) {
        that.setState({s_launches: [...that.state.s_launches, item]})
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
