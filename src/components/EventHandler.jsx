import React from 'react'

function EventHandler() {
    const clickHandler = (event, count = 1) => {
        console.log("Button clicked", count, event);
    }
  return (
    <div>
        <button onClick={clickHandler}>Click</button>
        <button onClick={(event) => clickHandler(event, 5)}>Click 5</button>
    </div>
  )
}

export default EventHandler