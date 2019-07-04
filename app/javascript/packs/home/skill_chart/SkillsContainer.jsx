import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios/index';
import ChartSkills from './ChartSkills'
import {Card, Container, Grid} from "semantic-ui-react";

class SkillsContainer extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      loadingHard: true,
      loadingSoft: true,
      hard_skills: null,
      soft_skills: null,
      chartData:{}
    };
  }

  componentDidMount() {
    axios.get('/hard-skills')
        .then( res => {
          this.setState({hard_skills: res.data, loadingHard:false});
        })
        .catch( err => {
          console.log(err)
        });

    axios.get('/soft-skills')
        .then( res => {
          this.setState({soft_skills: res.data, loadingSoft: false});
        })
        .catch( err => {
          console.log(err)
        });
  }

  render() {
    if (!this.state.loadingHard && !this.state.loadingSoft) {
      return (
          <div>
            <DrawHardSkills skills={this.state.hard_skills}/>
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

const DrawHardSkills = (props) => {
  return(
      <div>
        {props.skills.map(skill => (
          <ChartSkills
              chartData={
                {
                  labels: [skill.name],
                  datasets: [{
                    label: '# of Votes',
                  data: [skill.percent, (100-skill.percent)],
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 255, 255, 0)'],
                  borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)'],
                  borderWidth: 1}]
                }
              }
              key={skill.id}
          />
        ))
        }
      </div>
  )
};



export default SkillsContainer