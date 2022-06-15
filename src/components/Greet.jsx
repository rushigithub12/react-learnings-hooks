import React from 'react'

function Greet(props) {
  return (
    <div>
      <h3>Greeting to {props.name} a.k.a {props.heroName}</h3>
      {props.children}
    </div>
  )
}

export default Greet;