import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Spacex extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      launches: [],
    };
  }

  componentDidMount() {
    axios.get('https://api.spacexdata.com/v3/launches')
        .then( res => {
          this.setState({launches: res.data})
        })
        .catch( err => {
          console.log(err)
        });
  }

  render() {
    return (
        <div>
          <ShowLaunchesCount launches={this.state.launches}/>
        </div>
    )
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
