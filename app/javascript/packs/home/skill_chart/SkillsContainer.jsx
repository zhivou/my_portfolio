import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios/index';
import ChartSkills from './ChartSkills'

class SkillsContainer extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      loading: true,
      hard_skills: null,
      soft_skills: null,
      chartData:{}
    };
  }

  componentDidMount() {

    axios.get('/hard-skills')
        .then( res => {
          this.setState({hard_skills: res.data});
        })
        .catch( err => {
          console.log(err)
        });

    axios.get('/soft-skills')
        .then( res => {
          this.setState({soft_skills: res.data, loading: false});
        })
        .catch( err => {
          console.log(err)
        });
  }

  render() {
    if (!this.state.loading) {
      return (
          <div>

          </div>
      );
    }
    else {
      return (
         <div>
           Loading...
         </div>
      );
    }
  }
}

export default SkillsContainer