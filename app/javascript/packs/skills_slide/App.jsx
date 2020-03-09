import React from 'react';
import ReactDOM from 'react-dom';
import ExpSlider from './ExpSlider'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exp: gon.exp
    };

    this.height = gon.exp <= 1 ? 0 : (gon.exp.length - 1) * 325;
  }

  componentDidMount() {
    this.setState({
      exp: gon.exp,
    });

    // 310 is a distance between bullets. If there less than 1 bullet render 0 px
    let controllerTime = new ScrollMagic.Controller();

    const timelineId = `#timeline-start-1`;
    let tween = TweenMax.to(".pp-timeline-connector-inner", {height: this.height});

    new ScrollMagic.Scene({triggerElement: timelineId, duration: this.height, offset: 50})
      .setTween(tween)
      .addTo(controllerTime);
  }

  render() {
    return (
      <div>
        <div className="pp-timeline-connector-wrap pt-5 d-none d-lg-block d-xl-block">
          <div className="pp-timeline-connector">
            <div className="pp-timeline-connector-inner"></div>
          </div>
        </div>
        <div className="back-connector pt-5 d-none d-lg-block d-xl-block">
          <div>
            <div style={{height: this.height}}></div>
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
