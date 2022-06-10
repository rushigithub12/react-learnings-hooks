import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
      this.setState(prevCount => {
        return {
          count: prevCount.count + 1
        }
      })
  }

  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>Class Count {this.state.count} times</button>
      </div>
    );
  }
}

export default ClassCounter;
