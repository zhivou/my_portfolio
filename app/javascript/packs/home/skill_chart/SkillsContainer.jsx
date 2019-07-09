import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios/index';
import ChartSkills from './ChartSkills'
import Paragraph from './paragraph.png'
import { Segment, Dimmer, Loader, Image } from 'semantic-ui-react'
import LazyLoad from 'react-lazyload';

class SkillsContainer extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      loadingHard: true,
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
  }

  render() {
    if (!this.state.loadingHard) {
      return (
          <div className="jumbotron jumbotron-fluid m-0">
            <div className="container text-center">
              <h1 className="display-4">Hard Skills</h1>
              <p className="lead">Here is a set of my most dedicated skills(hard skills) I've developed in software engineering. This is a dynamic chart I learning something new everyday.</p>
              <p>To see all skills please visit my resume page: </p><a href="/resume">Resume Page</a>
              <hr className="my-4"/>
              <LazyLoad height={480} offset={-250}>
                <DrawHardSkills skills={this.state.hard_skills}/>
              </LazyLoad>
            </div>
          </div>
      );
    }
    else {
      return (
          <Segment className="loaderWrapper">
            <Dimmer active inverted>
              <Loader size='large'>Loading</Loader>
            </Dimmer>

            <Image src={Paragraph} className="imageLoader" centered/>
          </Segment>
      );
    }
  }
}

const DrawHardSkills = (props) => {
  return(
      <div className="skillsWrapper">
        {props.skills.map(skill => (
            <div className="chartItem" key={skill.id}>
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
              <h3 className="floatedPercent">{skill.percent}%</h3>
            </div>
        ))
        }
      </div>
  )
};



export default SkillsContainer