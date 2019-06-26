import React, { Component } from 'react';
import axios from "axios";
import {Container, Dimmer, Loader } from 'semantic-ui-react'

class Company extends Component {

  constructor(props){
    super(props);
    this.state = {
      loading: true,
      companyData: null
    }
  }

  componentDidMount() {
    this.setState({ loading: true });
    axios.get('https://api.spacexdata.com/v3/info')
        .then( res => {
          this.setState({companyData: res.data, loading: false});
        })
        .catch( err => {
          console.log(err)
        });

  }

  render(){
    if (!this.state.loading) {
      return (
          <div className="tableWrapper mt-3">
            <div className="bodyText">
              <h1>Company Info:</h1>
              <p>Company Name: {this.state.companyData.name}</p>
              <p>CEO: {this.state.companyData.ceo}</p>
              <p>COO: {this.state.companyData.coo}</p>
              <p>CTO: {this.state.companyData.cto}</p>
              <p>Employees: {this.state.companyData.employees}</p>
              <p>Founded by {this.state.companyData.founder} in {this.state.companyData.founded} year</p>
              <h1>Location</h1>
              <p>{this.state.companyData.headquarters.address}, {this.state.companyData.headquarters.city}, {this.state.companyData.headquarters.state}</p>
              <h1>Summary</h1>
              <p>{this.state.companyData.summary}</p>
              <h1>Links</h1>
              <a href={this.state.companyData.links.website}>website</a><br/>
              <a href={this.state.companyData.links.twitter}>twitter</a><br/>
              <a href={this.state.companyData.links.flickr}>flickr</a><br/>
              <a href={this.state.companyData.links.elon_twitter}>elon_twitter</a><br/>
            </div>
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

export default Company