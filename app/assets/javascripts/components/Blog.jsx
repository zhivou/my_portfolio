class Blog extends React.Component {

  constructor(props){
    super(props);

    this.handleTagClick = this.handleTagClick.bind(this);

    this.state = {
      blogs: [],
      tags: []
    };
  }

  componentDidMount() {
    axios.get('/blogs-api')
        .then( res => {
          this.setState({blogs: res.data})
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
    console.log(key)
  }

  render() {
    return (
      <div className="row">
        <div className="col-10">
          <Post
              blogs={this.state.blogs}
          />
        </div>
        <div className="col-2">
          <HashTags
              tags={this.state.tags}
              handleTagClick={this.handleTagClick}
          />
          <Calendar />
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

const Calendar = (props) => {
  return(
      <div>
        <hr/>
        Calendar
      </div>
  )
};

const HashTags = (props) => {
  return(
    <div>
      {Object.keys(props.tags).map(function(key) {
        return (
          <div onClick={() => props.handleTagClick(key)}>
            {key}({props.tags[key]})
          </div>
        );
      })}
    </div>
  )
};