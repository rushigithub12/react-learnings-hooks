import React, { Component } from 'react'
import updatedCount from './HigherCount'

class HoverCount extends Component {

  render() {
      const {count, incrementCount} = this.props;
    return (
      <div>
          <h2 onMouseOver={incrementCount}> {this.props.name} Hover {count} times</h2>
      </div>
    )
  }
}

export default updatedCount(HoverCount, 10)