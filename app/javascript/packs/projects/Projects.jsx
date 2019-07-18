import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios/index';
import { Segment, Dimmer, Loader, Image } from 'semantic-ui-react'
import LazyLoad from 'react-lazyload';

class Projects extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      loading: true,
      projects: ''
    };
  }

  componentDidMount() {
    axios.get('/api-projects')
        .then( res => {
          this.setState({projects: res.data, loading: false});
        })
        .catch( err => {
          console.log(err)
        });
  }

  render() {
    if (!this.state.loading) {
      return (
          <div className="jumbotron jumbotron-fluid m-0">
            <h1>Projects Section</h1>
          </div>
      );
    }
    else {
      return (
          <Segment className="loaderWrapper">
            <Dimmer active inverted>
              <Loader size='large'>Loading</Loader>
            </Dimmer>
          </Segment>
      );
    }
  }
}

export default Projects