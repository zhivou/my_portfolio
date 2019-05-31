// React component example. Use this folder for react only
// To call it from the view use -   <%= react_component("Post", {title: "Hello World"}) %>
// import axios from 'Axios';

class Blog extends React.Component {

  constructor(props){
    super(props);

    this.state = {
       id: null,
       title: null,
       description: null,
       time_words: null,
       created_at: null,
       updated_at: null
    };
  }

  componentDidMount() {

    temp_holder = Object.values(this.props);
    this.setState({
      id: temp_holder[0].id,
      title: temp_holder[0].title,
      created_at: temp_holder[0].created_at,
      updated_at: temp_holder[0].updated_at,
      description: temp_holder[1],
      time_words: temp_holder[2]
    })

    // $.ajax({
    //   method: 'GET',
    //   url: 'blogs-api',
    //   dataType: 'json',
    // }).done((data) => {
    //       this.setState({ blogs: data })
    //     })
  }

  render() {
    return (
      <div>
        <Post post={this.state} />
      </div>
    )
  }
}

const Post = (props) => {
  link = `/blogs/${props.post.id}`;

  return(
    <div>
      <div className="card shadow p-3 mb-3 bg-white rounded">
        <a href={link}>{props.post.title}</a>
        <p>{props.post.description}</p>
        <p>{props.post.time_words}</p>
      </div>
    </div>
  )
};