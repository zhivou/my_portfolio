import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Gallery from "react-photo-gallery";
import Spinner from './Spinner'
import 'semantic-ui-css/semantic.min.css'
import Viewer from './Viewer'

class GalleryUI extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      photos: [],
      loading: false
    };
  }

  componentDidMount() {
    this.setState({loading: true});
    axios.get('gallery-photos')
    .then( res => {
      this.setState({
        photos: res.data,
        loading: false
      })
    })
    .catch( err => {
      console.log(err);
      this.setState({loading: false})
    });
  }

  onClick = e => {
    const photoContainer = {
      id: e.target.id,
      name: e.target.name,
      src: e.target.src
    }

    const popup = $('#gallery-modal');
    popup.modal('show');

    $("#photo-image").attr("src", photoContainer.src);
  };

  render() {
    if (!this.state.loading) {
      return(
        <div className="container gallery-wrapper mt-3">
            <Gallery
            photos={this.state.photos}
            onClick={this.onClick}
            />
        </div>
      )
    } else {
      return (
        <Spinner/>
      )
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <GalleryUI name="React" />, document.getElementById('reactGallery'))
});
