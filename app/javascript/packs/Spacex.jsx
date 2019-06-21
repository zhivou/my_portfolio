import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Spacex extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      loading: false,
      launches: []
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    axios.get('https://api.spacexdata.com/v3/launches')
        .then( res => {
          this.setState({launches: res.data, loading: false})
        })
        .catch( err => {
          console.log(err)
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
      return (<p>Be Hold, fetching data may take some time :)</p>);
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
