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
        <div className="row">
          {this.state.blogs.map(blog => (
              <div className="col-sm-6 p-3" key={blog.id}>
                <a href={ "/blogs/" + blog.id} className="no-decoraction">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{blog.title}</h5>
                      <p className="card-text">{blog.short_body.substr(0,100)}...</p>
                      <a href={ "/blogs/" + blog.id} className="btn btn-block btn-light">Read more</a>
                    </div>
                  </div>
                </a>
              </div>
          ))
          }
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
