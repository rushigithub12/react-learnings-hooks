import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComponent'
import RegComp from './RegComp'

class CompContainer extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name : 'JavaScript'
      }
    }
    componenrtDidmount() {
        setInterval(() => {
            this.setState({
                name: 'Javascript'
            })
        }, 2000)
    }

  render() {
      console.log("*******Parent Component*********")
    return (
      <div>
          parent component
          <MemoComp name={this.state.name} />
          {/* <RegComp  name={this.state.name} />
          <PureComp name={this.state.name} /> */}
      </div>
    )
  }
}

export default CompContainer