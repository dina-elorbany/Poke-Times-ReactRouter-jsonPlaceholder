import axios from "axios";
import React, { Component } from "react";

import { Link } from "react-router-dom";

class Post extends Component {
  state = {
    post: [],
  };

  componentDidMount() {
    let postId = this.props.match.params.post_id;

    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => {
        this.setState({
          post: res.data,
        });
      });
  }

  render() {
    const post = this.state.post ? (
      <div className="card" key={this.state.post.id}>
        <div className="card-header">{this.state.post.id}</div>
        <div className="card-body">
          <h3 className="card-title text-primary">{this.state.post.title}</h3>

          <p className="card-text">{this.state.post.body}</p>
          <Link to="/" className="btn btn-light">
            ← Back
          </Link>
        </div>
      </div>
    ) : (
      <h2>Loading post...</h2>
    );

    return <div className="text-center">{post} </div>;
  }
}

export default Post;
