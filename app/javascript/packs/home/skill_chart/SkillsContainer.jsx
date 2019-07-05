import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios/index';
import ChartSkills from './ChartSkills'
import Paragraph from './paragraph.png'
import {Dimmer, Image, Loader, Segment} from "semantic-ui-react";

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
          <div className="text-center mt-3 mb-3">
            <h1>-Hard Skills-</h1>
            <DrawHardSkills skills={this.state.hard_skills}/>
          </div>
      );
    }
    else {
      return (
          <Segment className="loaderWrapper">
            <Dimmer active inverted>
              <Loader size='large'>Loading</Loader>
            </Dimmer>

            <Image src={Paragraph} className="imageLoader"/>
          </Segment>
      );
    }
  }
}

const DrawHardSkills = (props) => {
  return(
      <div>
        {props.skills.map(skill => (
            <div className="skillWrapper" key={skill.id}>
              <ChartSkills
                  chartData={
                    {
                      labels: [skill.name],
                      datasets: [{
                        label: '# of Votes',
                        data: [skill.percent, (100-skill.percent)],
                        backgroundColor: [
                          'rgba(25,54,65)',
                          'rgba(255, 255, 255, 0)'],
                        borderColor: [
                          'rgba(25,54,65)',
                          'rgba(255, 99, 132, 1)'],
                        borderWidth: 0}]
                    }
                  }
                  displayLegend={false}
                  chartName={skill.name}
              />
            </div>
        ))
        }
      </div>
  )
};



export default SkillsContainer