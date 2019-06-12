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
        <Post blogs={this.state.blogs}/>
        <Calendar />
        <HashTags />
      </div>
    )
  }
}

const Post = (props) => {
  return(
    <div>
      {props.blogs.map(item => (
          <li key={item.id}>
            {item.title}
            {}
          </li>
      ))}
    </div>
  )
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