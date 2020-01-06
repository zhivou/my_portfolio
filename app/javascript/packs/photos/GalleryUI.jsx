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

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      photos: [],
      keyWords: [],
      loading: true,
      currentImage: 0,
      viewerIsOpen: false
    };
  }

  componentDidMount() {
    this.getAllPhotos();
    this.getKeyWords();
  }

  handleClick(searchPhrase) {
    $('.keyword-button').removeClass('active');
    $(`#${searchPhrase.target.id}`).addClass('active');
    this.getAllPhotos(searchPhrase.target.value)
  }

  getAllPhotos(searchPhrase) {
    this.setState({loading: true});
    axios.get('gallery-photos', {
      params: {
        search_phrase: searchPhrase
      }
    })
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

  getKeyWords() {
    this.setState({loading: true});
    axios.get('photos-key-words')
    .then( res => {
      this.setState({
        keyWords: res.data,
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
      currentImage: Number(e.target.id),
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
    let gallery

    if(this.state.loading){
      gallery = (
        <Spinner/>
      )
    } else {
        gallery = (
          <Gallery
            photos={this.state.photos}
            onClick={this.openLightbox}
          />
        )
      }

      return(
        <div>
          <Navbar
            buttons={
              <div className="container nav-pills" id="navPills">
                <button type="button" className="keyword-button btn btn-outline-dark active" value="all" onClick={this.handleClick} id="all">All</button>
                <button type="button" className="keyword-button btn btn-outline-dark" value="old" onClick={this.handleClick} id="old">Oldest First</button>
                {
                  this.state.keyWords.map((word) => {
                    const key = `key-${word}`;
                    return(
                      <button
                        type="button"
                        className="keyword-button btn btn-outline-dark"
                        key={key}
                        value={word}
                        onClick={this.handleClick}
                        id={word}
                        >
                        {word}
                      </button>
                    )
                  })
                }
              </div>
            }
          />
          <div className="container gallery-wrapper mt-3">
              {gallery}
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
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <GalleryUI name="React" />, document.getElementById('reactGallery'))
});
