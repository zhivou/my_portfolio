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
      keyWords: [],
      loading: false,
      currentImage: 0,
      viewerIsOpen: false
    };
  }

  componentDidMount() {
    this.getAllPhotos();
  }

  getAllPhotos() {
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
    $('nav').fadeOut(1000);
    $('#navPills').fadeOut(1000);

    this.setState({
      currentImage: Number(e.target.id) - 1,
      viewerIsOpen: true
    })
  };

  closeLightbox = () => {
    $('nav').fadeIn(1000);
    $('#navPills').fadeIn(1000);
    this.setState({
      currentImage: 0,
      viewerIsOpen: false
    })
  };

  render() {
    if (!this.state.loading) {
      return(
        <div>
          <Navbar
            buttons={
              <div className="container nav-pills" id="navPills">
                <button type="button" className="btn btn-outline-dark active">All</button>
                <button type="button" className="btn btn-outline-dark">Newest</button>
                {
                  this.state.keyWords.map((word) => {
                    const key = `key-${word}`;
                    return(
                      <button type="button" className="btn btn-outline-dark" key={key}>{word}</button>
                    )
                  })
                }
              </div>
            }
          />
          <div className="container gallery-wrapper mt-3">
              <Gallery
                photos={this.state.photos}
                onClick={this.openLightbox}
              />
              <ModalGateway id="lightbox-modal">
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
