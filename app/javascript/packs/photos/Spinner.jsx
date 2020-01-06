import React from 'react';
import ReactDOM from 'react-dom';

class Spinner extends React.Component {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status" id="spinner">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
}

export default Spinner;
