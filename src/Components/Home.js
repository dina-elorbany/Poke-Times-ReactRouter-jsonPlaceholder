import React, { Component } from "react";
import Rainbow from "./HOC/Rainbow";

import { Link } from "react-router-dom";
import axios from "axios";

class Home extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      this.setState({
        posts: res.data.slice(0, 10),
      });
    });
  }

  render() {
    const { posts } = this.state;
    const postsList = posts.length ? (
      posts.map((post) => {
        return (
          <div className="card" key={post.id}>
            <div className="card-header">{post.id}</div>
            <div className="card-body">
              <Link to={`/${post.id}`} className="text-dark">
                <h3 className="card-title">{post.title}</h3>
              </Link>
              <p className="card-text">{post.body}</p>
              <Link to={`/${post.id}`} className="btn btn-danger">
                Read More →
              </Link>
            </div>
          </div>
        );
      })
    ) : (
      <h1 className="text-center">posts have not been loaded yet!</h1>
    );

    return <div>{postsList}</div>;
  }
}

export default Rainbow(Home);
