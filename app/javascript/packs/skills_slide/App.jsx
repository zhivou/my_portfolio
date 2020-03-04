import React from 'react';
import ReactDOM from 'react-dom';
import ExpSlider from './ExpSlider'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exp: []
    };
  }

  componentDidMount() {
    this.setState({
      exp: gon.exp,
    });
  }

  render() {
    return (
      <div>
        <div className="pp-timeline-connector-wrap">
          <div className="pp-timeline-connector">
            <div className="pp-timeline-connector-inner"></div>
          </div>
        </div>
        <ExpSlider exp={ this.state.exp }/>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App name="React" />, document.getElementById('react-skills-slide'))
});
