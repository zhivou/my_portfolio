import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Gallery from "react-photo-gallery";
import Spinner from './Spinner'
import 'semantic-ui-css/semantic.min.css'
import Navbar from './Navbar'
import Carousel, { Modal, ModalGateway } from "react-images";

class GalleryUI extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      photos: [],
      loading: false,
      currentImage: 0,
      viewerIsOpen: false
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

  openLightbox = (e) => {
    this.setState({
      currentImage: Number(e.target.id) - 1,
      viewerIsOpen: true
    })
  };

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      viewerIsOpen: false
    })
  };

  render() {
    if (!this.state.loading) {
      return(
        <div>
          <Navbar/>
          <div className="container gallery-wrapper mt-3">
              <Gallery
                photos={this.state.photos}
                onClick={this.openLightbox}
              />
              <ModalGateway>
                {this.state.viewerIsOpen ? (
                  <Modal onClose={this.closeLightbox}>
                    <Carousel
                      currentIndex={this.state.currentImage}
                      views={this.state.photos.map(x => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title
                      }))}
                    />
                  </Modal>
                ) : null}
              </ModalGateway>
          </div>
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
