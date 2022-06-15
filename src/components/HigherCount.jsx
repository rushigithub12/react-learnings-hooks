import React from 'react';

const updatedCount = (OriginalCount, incrementNum) => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)
          
            this.state = {
               count: 0
            }
          }
          increamentCount = () => {
              this.setState(prevState => {
                  return {count : prevState.count + incrementNum}
              })
          }
        render() {
            return <OriginalCount count={this.state.count} incrementCount={this.increamentCount}
            {...this.props} />
        }
    }
    return NewComponent
} 
export default updatedCount;