import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios/index';
import Countdown from 'react-countdown-now/dist/index';
import ChartComponent from '../react_charts/ChartComponent';
import { Card, Container, Divider, Segment, Grid, Dimmer, Loader, Image } from 'semantic-ui-react'
import './Launches.css';
import Paragraph from './paragraph.png'

class Launches extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      loading: true,
      launches: [],
      s_launches: [],
      f_launches: [],
      future_launches: [],
      next_launch: null,
      chartSuccessful: null,
      chartData:{}
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    axios.get('https://api.spacexdata.com/v3/launches')
        .then( res => {
          this.setState({launches: res.data});
          this.setAllSuccessfulLaunches();
          this.setAllFailedLaunches();
          this.setAllFutureLaunches();
          this.getNextLaunchTime();
          this.getTotalLaunchesChartData();
        })
        .catch( err => {
          console.log(err)
        });

  }

  setAllSuccessfulLaunches() {
    console.log("Calculating Successful Launches");
    let that = this;

    this.state.launches.forEach(function (item) {
      if (item.launch_success === true) {
        that.setState({s_launches: [...that.state.s_launches, item]})
      }
    });
  }

  setAllFailedLaunches() {
    console.log("Calculating Failed Launches");
    let that = this;

    this.state.launches.forEach(function (item) {
      if (item.launch_success === false) {
        that.setState({f_launches: [...that.state.f_launches, item]})
      }
    });
  }

  setAllFutureLaunches() {
    console.log("Calculating Future Launches");
    let that = this;

    this.state.launches.forEach(function (item) {
      if (item.upcoming === true) {
        that.setState({future_launches: [...that.state.future_launches, item]})
      }
    });
  }

  getNextLaunchTime() {
    let that = this;

    axios.get('https://api.spacexdata.com/v3/launches/next')
        .then( res => {
          that.setState({next_launch: res.data});
          that.setState({loading: false}); // Move this when needed
        })
        .catch( err => {
          console.log(err)
        });
  }

  getTotalLaunchesChartData(){
    let successfulArray = this.getDataForSuccessfulChart();
    let failedArray = this.getDataForFailedChart();

    this.setState({
      chartData:{
        labels: Object.keys(successfulArray),

        datasets:[
          {
            label:'Successful Launches',
            data: Object.values(successfulArray),
            backgroundColor: "rgba(0, 177, 106, 1)"
          },
          {
            label:'Failed Launches',
            data: Object.values(failedArray),
            backgroundColor: "rgba(231, 76, 60, 1)"
          },
        ]

      }
    });
  }

  //
  // Counting launches per year and preparing it for totalLaunchesChart
  // Example:
  // {2017:2, 2018:31}
  //
  getDataForSuccessfulChart(){
    let collection = {};

    this.state.s_launches.forEach( function(i) {
      if (collection[i.launch_year]) {
        collection[i.launch_year] += 1
      }
      else {
        collection[i.launch_year] = 1
      }
    });
    return collection
  }

  getDataForFailedChart(){
    let collection = {};

    this.state.launches.forEach( function(i) {
      if (collection[i.launch_year] && i.launch_success === false) {
        collection[i.launch_year] += 1
      }
      else if(!collection[i.launch_year] && i.launch_success === false) {
        collection[i.launch_year] = 1
      }
      else if (!collection[i.launch_year]) {
        collection[i.launch_year] = 0
      }
    });
    return collection;
  }

  render() {
    if (!this.state.loading) {
      return (
          <div id="mainWrapper">
            <ShowNextLaunch next_launch={this.state.next_launch}/>
            <br/>
            <Grid columns={2} fitted>
                <Grid.Column>
                    <ShowTotalCount launches={this.state.launches}/>
                </Grid.Column>
              <Grid.Column>
                <ShowFutureLaunches
                    launches={this.state.future_launches}
                    next_launch={this.state.next_launch}
                />
              </Grid.Column>
            </Grid>
            <br/>
            <ShowErroneousLaunches launches={this.state.f_launches}/>
            <br/>
            <ChartComponent
                chartData={this.state.chartData}
                chartName="Total Launches per Year"
                legendPosition="bottom"
            />
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
            <Image src={Paragraph} className="imageLoader"/>
            <Image src={Paragraph} className="imageLoader"/>
          </Segment>
      );
    }
  }
}

const ShowTotalCount = (props) => {
  let total_by_mission = {};

  props.launches.forEach( function(i) {
    if (total_by_mission[i.rocket.rocket_name]) {
      total_by_mission[i.rocket.rocket_name] += 1
    }
    else {
      total_by_mission[i.rocket.rocket_name] = 1
    }
  });

  console.log(total_by_mission);

  return(
        <Card fluid>
          <Card.Content>
            <Card.Header>Total Launches</Card.Header>
            <hr/>
            <Card.Description>
              <Grid columns={2} relaxed='very' stackable>
                <Grid.Column>
                  <div className="lanchesCircle">
                    <p className="count">{props.launches.length}</p>
                    <p>Total count</p>
                  </div>
                </Grid.Column>
                <Grid.Column className="rightText">
                  {Object.keys(total_by_mission).map(function(key) {
                    return (
                        <div key={key}>
                          <span className="rightCount">{total_by_mission[key]}</span><span> - {key}</span>
                        </div>
                    );
                  })}
                </Grid.Column>
              </Grid>
            </Card.Description>
          </Card.Content>
        </Card>
  )
};

const ShowErroneousLaunches = (props) => {
  return(
      <Container>
        <Card fluid>
          <Card.Content>
            <Card.Header>Failed Launches</Card.Header>
            <hr/>
            <Card.Description>
              <Grid columns={1} relaxed='very' stackable>
                <Grid.Column>
                  <div className="lanchesCircle failed">
                    <p className="count">{props.launches.length}</p>
                    <p>Total failed</p>
                  </div>
                </Grid.Column>
                <Grid.Column>
                  {props.launches.map(item => (
                      <ul>
                        <li key={item.flight_number} className="failedText">
                          {item.details}
                        </li>
                      </ul>
                  ))
                  }
                </Grid.Column>
              </Grid>
            </Card.Description>
          </Card.Content>
        </Card>
      </Container>
  )
};

const ShowFutureLaunches = (props) => {
  let total_by_mission = {};

  props.launches.forEach( function(i) {
    if (total_by_mission[i.rocket.rocket_name]) {
      total_by_mission[i.rocket.rocket_name] += 1
    }
    else {
      total_by_mission[i.rocket.rocket_name] = 1
    }
  });

  return(
        <Card fluid>
          <Card.Content>
            <Card.Header>Total Successful Launches</Card.Header>
            <hr/>
            <Card.Description>
              <Grid columns={2} relaxed='very' stackable>
                <Grid.Column>
                  <div className="lanchesCircle success">
                    <p className="count">{props.launches.length}</p>
                    <p>Total Successful</p>
                  </div>
                </Grid.Column>
                <Grid.Column className="rightText">
                  {Object.keys(total_by_mission).map(function(key) {
                    return (
                        <div key={key}>
                          <span className="rightCountSuccess">{total_by_mission[key]}</span><span> - {key}</span>
                        </div>
                    );
                  })}
                </Grid.Column>
              </Grid>
            </Card.Description>
          </Card.Content>
        </Card>
  )
};

const ShowNextLaunch = (props) => {
  return(
    <Countdown date={(Date.now(), props.next_launch.launch_date_utc)}/>
  )
}

export default Launches