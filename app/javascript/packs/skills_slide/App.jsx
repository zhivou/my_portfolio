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

    var controllerTime = new ScrollMagic.Controller();
    var tween = TweenMax.to(".pp-timeline-connector-inner", 0.5, {height: 600});

    var scene = new ScrollMagic.Scene({triggerElement: ".pp-timeline-connector-inner", duration: 600, offset: 70})
      .setTween(tween)
      .addIndicators()
      .addTo(controllerTime);
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
