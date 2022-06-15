import React, { Component } from 'react'
import ForwrdInp from './ForwrdInp'

class ForwrdParent extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef();
    }
    clickHandler = () => {
        this.inputRef.current.focus();
    }
  render() {
    return (
      <div>
          <ForwrdInp ref={this.inputRef}/>
          <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default ForwrdParent