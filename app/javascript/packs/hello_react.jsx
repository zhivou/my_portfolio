import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Calendar from 'react-calendar';
import './Calendar.css'
import InfiniteScroll from 'react-infinite-scroller';

class Blog extends React.Component {

  constructor(props){
    super(props);

    this.handleTagClick = this.handleTagClick.bind(this);

    this.state = {
      blogs: [],
      tags: [],
      blogs_count: 0,
      searchTitle: "All Blogs",
      date: new Date(),
      hasMoreItems: true,
      nextPage: null,
      pageSize: 3,
      pagesLoaded: [],
      stopLoad: false
    };
  }

  onChange = date => {
    this.setState({ date });
    let newDate = date.toISOString().split('T')[0];

    axios.get(`/blogs-api/${newDate}`, {
      params: {
        page: 1,
        page_size: this.state.pageSize
      }})
        .then( res => {
          this.setState({
            blogs: res.data[1],
            hasMoreItems: true,
            pagesLoaded: [1],
            nextPage: null
          })
        })
        .catch( err => {
          console.log(err)
        });
  };

  componentDidMount() {
    let newDate = this.state.date.toISOString().split('T')[0];

    axios.get(`/blogs-api/${newDate}`, {
      params: {
        page: 1,
        page_size: this.state.pageSize
      }
    })
    .then( res => {
      this.setState({blogs: res.data[1]})
    })
    .catch( err => {
      console.log(err)
    });

    axios.get(`/blogs-api/${newDate}`, {
    })
    .then( res => {
      this.setState({blogs_count: res.data[1].length})
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
    let link;
    let newDate = this.state.date.toISOString().split('T')[0];
    this.setState({
        stopLoad: true
    });

    if (key === 'All Blogs') {
      link = `/blogs-api/${newDate}`
      this.setState({stopLoad: false});
      axios.get(link, {
        params: {
          page: 1,
          page_size: this.state.pageSize
        }})
          .then( res => {
            this.setState({
              blogs: res.data[1],
              pagesLoaded: [1],
              hasMoreItems: true,
              nextPage: null,
              searchTitle: key
            })
          })
          .catch( err => {
            console.log(err)
          });
    } else {
        if($('#spinner').length > 0){
             $('#spinner').hide();
         };
        link = `/api-search-tags/${key}`;
        axios.get(link)
            .then( res => {
              this.setState({
                blogs: res.data,
                searchTitle: key,
                pagesLoaded: [],
                hasMoreItems: false
              })
            })
            .catch( err => {
              console.log(err)
            });
    }
  }

  loadItems(page) {
    let self = this;
    let newDate = this.state.date.toISOString().split('T')[0];

    let page_number = 2
    if(this.state.nextPage) {
        page_number = this.state.nextPage;
    }
    $('#spinner').show();
    axios.get(`/blogs-api/${newDate}`, {
      params: {
        page: page_number,
        page_size: this.state.pageSize
      }
    })
        .then( res => {
          if(res.data && !(self.state.pagesLoaded.includes(page_number)) && !self.state.stopLoad) {
            let blogs = self.state.blogs;

            res.data[1].map((blog) => {
              blogs.push(blog);
            });

            if(res.data[0].nextPage){
              self.setState({
                blogs: blogs,
                nextPage: res.data[0].nextPage
              })
            } else {
              self.setState({
                  hasMoreItems: false
              });
            }
            self.state.pagesLoaded.push(page_number);
          }
        })
        .catch( err => {
          console.log(err)
        });
  }

  render() {
    const loader = (
      <div id="spinner" className="m-5">
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
    let items = [];

    this.state.blogs.map((item, i) => {
          items.push(
            <div className="card shadow p-3 mb-3 bg-white rounded" key={i}>
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
          );
      });

    return (
        <div>
          <div className="searchTitle col-xl-10 col-sm-12">
            <h2>{this.state.searchTitle}</h2>
            <p>{
              this.state.date.toISOString().split('T')[0] }
            </p>
            <hr/>
          </div>
          <div className="row">
            <div className="col-xl-8 col-sm-12">

            <InfiniteScroll
                pageStart={0}
                loadMore={this.loadItems.bind(this)}
                hasMore={this.state.hasMoreItems}
                initialLoad={false}
                loader={loader}
                >
                <div>
                  {items}
                </div>

            </InfiniteScroll>



            </div>

            <div className="col-4 d-none d-xl-block">
              <Calendar
                  onChange={this.onChange}
                  value={this.state.date}
                  calendarType="US"
              />
              <hr/>
              <h3 className="red-color">Hashtags:</h3>
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
                <button onClick={() => props.handleTagClick(key)} key={key} className="btn btn-outline-dark m-1" type="button">
                  {key} <span class="badge badge-secondary">{props.tags[key]}</span>
                </button>
            );
          })}
        </div>
        <div>
          <button onClick={() => props.handleTagClick("All Blogs")} key="All Blogs:" className="btn btn-outline-dark m-1" type="button">
            All <span class="badge badge-secondary">{props.tags_count}</span>
          </button>
        </div>
      </div>
  )
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Blog name="React" />, document.getElementById('reactBlogs'))
});
