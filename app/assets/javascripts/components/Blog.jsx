class Blog extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      blogs: []
    };
  }

  componentDidMount() {
    axios.get('/blogs-api')
        .then( res => {
          this.setState({blogs: res.data})
        })
        .catch( err => {
          console.log(err)
        })
  }

  render() {
    return (
      <div>
        <Post
            blogs={this.state.blogs}
        />
        <Calendar />
        <HashTags />
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
                    <p>{item.short_body}</p>
                  </div>
                  <hr/>
                  <p>Posted: {item.created_at} ago.</p>
                </div>
              </div>
          ))
        }
      </div>)
};

const Calendar = (props) => {
  return(
      <div>
        <p>Calendar</p>
      </div>
  )
};

const HashTags = (props) => {
  return(
      <div>
        <p>Hashes</p>
      </div>
  )
};