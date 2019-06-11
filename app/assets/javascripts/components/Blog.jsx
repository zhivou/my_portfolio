class Blog extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      blogs: null
    };
  }

  componentDidMount() {
    axios.get('/blogs-api')
        .then( res => {
          this.setState({ blogs: res.data })
        })
        .catch( err => {
          console.log(err)
        })
  }

  render() {
    return (
      <div>
        <Post post={this.state} />
        <Calendar date={"2019/01/01"}/>
        <HashTags />
      </div>
    )
  }
}

const Post = (props) => {
  return(
    <div>
      <p>Post will be here</p>
    </div>
  )
};

const Calendar = (props) => {
  return(
      <div>
        <p>Here is a calendar</p>
      </div>
  )
};

const HashTags = (props) => {
  return(
      <div>
        <p>Hashes</p>
      </div>
  )
}