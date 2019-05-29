// React component example. Use this folder for react only
// To call it from the view use -   <%= react_component("Post", {title: "Hello World"}) %>

//import axios from 'axios';
//this.props, hash_name: ""
class Blog extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      blogs: []
    };
  }

  componentDidMount(){
    this.setState({ blogs: Object.values(this.props)}) // <-- Important!! transforms Object to Array
  }

  render() {
    return (
      <div>
        <Post posts={this.state.blogs} />
      </div>
    )
  }
}

const Post = (props) => {
  let posts = props.posts.map((post) => {
    link = `/api/orders/${post.id}`;
    return(
        <div className="card shadow p-3 mb-3 bg-white rounded">
          <div className="card-body">
            <div className="card-title"><a href={link} className="blogLink" style="color: indianred;">
              {post.title}</a>
            </div>
          </div>
        </div>
    )
  });
  return (
      <div>
        {posts}
      </div>
  );
};