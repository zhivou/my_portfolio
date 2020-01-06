import React from 'react';
import ReactDOM from 'react-dom';

class Spinner extends React.Component {
  render() {
    return (
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status" id="spinner">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
}

export default Spinner;
