import React from 'react';
import ReactDOM from 'react-dom';

class Navbar extends React.Component {
  render() {
    let newPhotoButton;
    if(gon.admin_flag) {
      newPhotoButton = (
        <a href="/photos/new" className="nav-link">Add New Photo</a>
      )} else {
        newPhotoButton = ""
    }

    return (
      <div className="sticky-top">
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container ">
          <span className="navbar-brand">
            PHOTOFEED
          </span>
          <div className="justify-content-end navbar-collapse collapse">
            <div className="navbar-nav">
                {newPhotoButton}
                <a href="/" className="nav-link">Exit</a>
            </div>
          </div>
        </div>
        </nav>
        {this.props.buttons}
      </div>
    );
  }
}

export default Navbar;
