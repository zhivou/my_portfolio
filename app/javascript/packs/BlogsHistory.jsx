import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Loader } from 'semantic-ui-react'

class BlogsHistory extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      loading: true,
      blogs: [],
    };
  }

  componentDidMount() {
    axios.get('/random-blogs')
        .then( res => {
          this.setState({blogs: res.data, loading: false})
        })
        .catch( err => {
          console.log(err)
        });
  }

  render() {
    if (!this.state.loading) {
      return (
          <div>
            <div className="row justify-content-center">
              {this.state.blogs.map(blog => (
                <div className="col-6 col-xs-12 blogs-history-title" key={blog.id}>
                  <a href={ "/blogs/" + blog.id}>{blog.title}</a>
                </div>
              ))
              }
            </div>
          </div>
      )
    }
    else {
      return (
          <div>
            <div className="container text-center">
              <Loader size='massive'>Loading...</Loader>
            </div>
          </div>
      )
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
      <BlogsHistory name="React" />, document.getElementById('react-blogs-history'))
});
