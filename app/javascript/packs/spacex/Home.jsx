import React from 'react';
import { Container } from 'semantic-ui-react'

class Home extends React.Component {

  render() {
    return (
        <Container>
          <div className="mainWrapper">
            <h1 className="titleText">SpaceX API Project</h1>
            <p className="bodyText">
              This is an Unofficial SpaceX Open Source REST API for rocket, core,
              capsule, pad, and launch data. This public API does not require authentication
              and includes endpoints for; Launches, Rockets, Capsules, Company Info, Roadster
              Info and more. SpaceX designs, manufactures and launches advanced rockets and spacecraft.
            </p>
          </div>
        </Container>

    )
  }
}

export default Home;
