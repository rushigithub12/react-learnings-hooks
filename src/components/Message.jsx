import React, { useState } from 'react'

function Message() {
    const [message, setMessage] = useState('Welcome Visitor');
  return (
    <div>
        <h2>{message}</h2>
        <button onClick={ () =>  setMessage('Thank you for subscribing!') }>Subscribe</button>
    </div>
  )
}

export default Message