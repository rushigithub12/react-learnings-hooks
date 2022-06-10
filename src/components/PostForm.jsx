import React, { Component } from "react";
import axios from "axios";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
      status: null
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);

    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        console.log(response);
        this.setState({ status: "Deleted successful" });
      });
  }

  render() {
    const { userId, title, body, status } = this.state;
    return (
      <div>
          <div>
              Status: {status}
          </div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.changeHandler}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
