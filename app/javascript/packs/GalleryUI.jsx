import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Gallery from "react-photo-gallery";
import { photos } from "./photos";

class GalleryUI extends React.Component {
  render() {
    return(
      <div>
          <Gallery photos={photos} />
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <GalleryUI name="React" />, document.getElementById('reactGallery'))
});
