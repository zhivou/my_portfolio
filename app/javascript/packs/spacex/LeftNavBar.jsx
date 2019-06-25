import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import Launches from './launches/Launches';
import Home from './Home';
import './LeftNavBarStyle.css';

class LeftNavBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showLaunches: false,
      showHome: true,
      showDevelopment: false
    };

    this.handleShowLaunches = this.handleShowLaunches.bind(this);
    this.handleShowHome = this.handleShowHome.bind(this);
    this.handleShowDev = this.handleShowDev.bind(this)
  };

  handleShowLaunches() {
    this.setState({
      showHome: false,
      showDevelopment: false,
      showLaunches: true
    });
  }

  handleShowHome() {
    this.setState({
      showLaunches: false,
      showDevelopment: false,
      showHome: true
    });
  }

  handleShowDev() {
    this.setState({
      showLaunches: false,
      showHome: false,
      showDevelopment: true
    });
  }

  render() {
    return (
        <Sidebar.Pushable as={Segment} className="leftNavBar">
          <Sidebar as={Menu} icon='labeled' inverted vertical visible width='thin' direction="left">
            <Menu.Item as='a' onClick={this.handleShowHome}>
              <Icon name='home'/>
              Home
            </Menu.Item>
            <Menu.Item as='a' onClick={this.handleShowLaunches}>
              <Icon name='rocket' />
              Launches
            </Menu.Item>
            <Menu.Item as='a' onClick={this.handleShowDev}>
              <Icon name='code' />
              In Developmnet
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
              {this.state.showLaunches ? <Launches /> : null }
              {this.state.showHome ? <Home/> : null }
              {this.state.showDevelopment ? <div>Don't you worry I will develop this page soon!</div> : null }
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
    )
  }
}

export default LeftNavBar;