import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component {
    constructor(props) {
      super(props)
      this.parentRef = React.createRef();
    }
    clickHandler = () => {
        this.parentRef.current.focuInput()
    }

  render() {
    return (
      <div>
          <Input ref={this.parentRef}/>
          <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FocusInput