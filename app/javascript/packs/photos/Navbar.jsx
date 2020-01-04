import React from 'react';
import ReactDOM from 'react-dom';

class Navbar extends React.Component {
  render() {
    return (
      <div className="container sticky-top">
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <span className="navbar-brand">
            PHOTOFEED
          </span>
          <div className="justify-content-end navbar-collapse collapse">
            <div className="navbar-nav">
                <a href="/photos/new" className="nav-link">Add New Photo</a>
                <a href="/" className="nav-link">Exit</a>
            </div>
          </div>
        </nav>
        <div className="container nav-pills">
          <button type="button" className="btn btn-outline-dark active">All</button>
          <button type="button" className="btn btn-outline-dark">Newest</button>
          <button type="button" className="btn btn-outline-dark">Portrets</button>
          <button type="button" className="btn btn-outline-dark">Street</button>
          <button type="button" className="btn btn-outline-dark">Landscape</button>
        </div>
      </div>
    );
  }
}

export default Navbar;
