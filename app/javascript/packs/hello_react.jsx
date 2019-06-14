import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Calendar from 'react-calendar';

class Blog extends React.Component {

  constructor(props){
    super(props);

    this.handleTagClick = this.handleTagClick.bind(this);

    this.state = {
      blogs: [],
      tags: [],
      blogs_count: 0,
      searchTitle: "All Blogs",
      date: new Date()
    };
  }

  componentDidMount() {
    axios.get('/blogs-api')
        .then( res => {
          this.setState({blogs: res.data, blogs_count: res.data.length})
        })
        .catch( err => {
          console.log(err)
        });

    axios.get('/api-tags')
        .then( res => {
          this.setState({tags: res.data})
        })
        .catch( err => {
          console.log(err)
        });
  }

  handleTagClick(key) {
    let link = '';

    if (key === 'All Blogs') {
      link = '/blogs-api'
    }
    else {
      link = `/api-search-tags/${key}`
    }

    axios.get(link)
        .then( res => {
          this.setState({blogs: res.data, searchTitle: key})
        })
        .catch( err => {
          console.log(err)
        });
  }

  render() {
    return (
        <div>
          <div className="searchTitle col-10">
            <h2>{this.state.searchTitle}</h2>
            <hr/>
          </div>
          <div className="row">
            <div className="col-8">
              <Post
                  blogs={this.state.blogs}
              />
            </div>

            <div className="col-4">
              <Calendar
                  onChange={this.onChange}
                  value={this.state.date}
              />
              <hr/>

              <HashTags
                  tags={this.state.tags}
                  handleTagClick={this.handleTagClick}
                  tags_count={this.state.blogs_count}
              />
            </div>
          </div>
        </div>
    )
  }
}

const Post = (props) => {
  return(
      <div>
        {
          props.blogs.map(item => (
              <div className="card shadow p-3 mb-3 bg-white rounded" key={item.id}>
                <div className="card-body">
                  <div className="card-title">
                    <a href={`/blogs/${item.id}`} className="blogLink">{item.title}</a>
                  </div>
                  <div className="card-text">
                    <p>{item.short_body}<a href={`/blogs/${item.id}`} className="blogLink"> read more>></a></p>
                  </div>
                  <hr/>
                  <p>Posted at: {item.created_at.substring(0, 10)}</p>
                </div>
              </div>
          ))
        }
      </div>)
};

const HashTags = (props) => {
  return(
      <div>
        <div>
          {Object.keys(props.tags).map(function(key) {
            return (
                <div onClick={() => props.handleTagClick(key)} key={key} className="hashTah">
                  {key}({props.tags[key]})
                </div>
            );
          })}
        </div>
        <div>
          <div onClick={() => props.handleTagClick("All Blogs")} key="All Blogs:" className="hashTah">
            All({props.tags_count})
          </div>
        </div>
      </div>
  )
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Blog name="React" />, document.getElementById('reactBlogs'))
});
