import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Loader } from 'semantic-ui-react'

class ProjectsHistory extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      loading: true,
      projects: [],
    };
  }

  componentDidMount() {
    axios.get('/random-projects')
        .then( res => {
          this.setState({projects: res.data, loading: false})
        })
        .catch( err => {
          console.log(err)
        });
  }

  render() {
    if (!this.state.loading) {
      return (
          <div>
            <div className="row justify-content-left">
              {this.state.projects.map(project => (
                  <div className="col-6 col-xs-12 blogs-history-title" key={project.id}>
                    <a href={ "/projects/" + project.id}>{project.title}</a>
                  </div>
              ))
              }
            </div>
          </div>
      )
    }
    else {
      return (
          <div>
            <div className="container text-center">
              <Loader size='massive'>Loading...</Loader>
            </div>
          </div>
      )
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
      <ProjectsHistory name="React" />, document.getElementById('react-projects-history'))
});
