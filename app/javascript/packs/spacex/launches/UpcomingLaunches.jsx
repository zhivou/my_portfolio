import React, { Component } from 'react';
import axios from "axios";
import { Container, Dimmer, Loader, Image, Icon, Label, Menu, Table } from 'semantic-ui-react'

// This Component creates a table for any data you pass in
// as a prop
class UpcomingLaunches extends Component {

  constructor(props){
    super(props);
    this.state = {
      loading: true,
      listData: null
    }
  }

  componentDidMount() {
    this.setState({ loading: true });
    axios.get('https://api.spacexdata.com/v3/launches/upcoming')
        .then( res => {
          this.setState({listData: res.data, loading: false});
        })
        .catch( err => {
          console.log(err)
        });

  }
  // This is A way to set defaultProps in react
  static defaultProps = {
    tableName: 'Table Name'
  };

  render(){
    if (!this.state.loading) {
      return (
          <div className="tableWrapper">
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Flight Number</Table.HeaderCell>
                  <Table.HeaderCell>Launch Date</Table.HeaderCell>
                  <Table.HeaderCell>Launch Site</Table.HeaderCell>
                  <Table.HeaderCell>Rocket</Table.HeaderCell>
                  <Table.HeaderCell>Mission Name</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
            </Table>
          </div>
      );
    }
    else {
      return (
        <Dimmer active inverted>
          <Loader size='large'>Loading</Loader>
        </Dimmer>
      );
    }
  }
}

export default UpcomingLaunches