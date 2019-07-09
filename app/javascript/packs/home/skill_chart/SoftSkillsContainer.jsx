import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios/index';
import HorizontalChartSkills from './HorizontalChartSkills'
import Paragraph from './paragraph.png'
import { Segment, Dimmer, Loader, Image } from 'semantic-ui-react'
import LazyLoad from 'react-lazyload';

class SoftSkillsContainer extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      loadingSoft: true,
      soft_skills: null,
      chartData:{}
    };
  }

  componentDidMount() {
    axios.get('/soft-skills')
        .then( res => {
          this.setState({soft_skills: res.data, loadingSoft: false});
        })
        .catch( err => {
          console.log(err)
        });
  }

  render() {
    if (!this.state.loadingSoft) {
      return (
          <div className="jumbotron jumbotron-fluid m-0 softSectionWrapper">
            <div className="container text-center">
              <h1 className="display-4">Soft Skills</h1>
              <p className="lead">Soft skills are a combination of people skills, social skills, communication skills, character or personality traits, attitudes, career attributes, social intelligence and emotional intelligence quotients, among others, that enable people to navigate their environment, work well with others, perform well, and achieve their goals with complementing hard skills.</p>
              <hr className="my-4"/>
              <LazyLoad height={480} offset={-250}>
                <DrawSoftSkills skills={this.state.soft_skills}/>
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

const DrawSoftSkills = (props) => {
  return(
      <div className="skillsWrapper">
        {props.skills.map(skill => (
            <div className="horizontalChartItem" key={skill.id}>
              <h3>{skill.name}</h3>
              <HorizontalChartSkills
                  chartData={
                    {
                      labels: [skill.name],
                      datasets: [{
                        label: 'Skill',
                        data: [skill.percent],
                        backgroundColor: ['rgba(25,54,65)'],
                        borderColor: ['rgba(25,54,65)'],
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



export default SoftSkillsContainer