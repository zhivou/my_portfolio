// React component example. Use this folder for react only
// To call it from the view use -   <%= react_component("Post", {title: "Hello World"}) %>

//import axios from 'axios';

class Blog extends React.Component {

  constructor(props){
    super(props);
    this.state = { blogs: this.props, hash_name: "" };
  }

  render() {
    return (
      <h1>a</h1>
    )
  }
}

const Post = (props) => {
  link = `/api/orders/${props.post.id}`;
  return (
      <div className="card shadow p-3 mb-3 bg-white rounded">
        <div className="card-body">
          <div className="card-title"><a href={link} className="blogLink" style="color: indianred;">
            {props.post.title}</a>
          </div>
        </div>
      </div>
  );
};

{/*<Post*/}
    {/*post={this.state.blogs}*/}
{/*/>*/}