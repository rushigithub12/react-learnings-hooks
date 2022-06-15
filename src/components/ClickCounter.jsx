import React, { Component } from 'react';
import updatedCount from './HigherCount'

class ClickCounter extends Component {

  render() {
      const {count, incrementCount} = this.props;
    return (
      <div>
          <button onClick={incrementCount}> {this.props.name} Click {count} times</button>
      </div>
    )
  }
}

export default updatedCount(ClickCounter, 5)