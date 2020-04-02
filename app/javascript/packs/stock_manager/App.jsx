import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: []
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="card">
              <div className="card-header">
                Current Investments
              </div>
              <div className="card-body">
                <h4 className="card-title">Special title treatment</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App name="React" />, document.getElementById('react-stock'))
});
