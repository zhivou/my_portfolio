import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Gallery from "react-photo-gallery";
import Spinner from './Spinner'

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

  render() {
    if (!this.state.loading) {
      return(
        <div className="container gallery-wrapper">
            <Gallery photos={this.state.photos} columns={4} />
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
