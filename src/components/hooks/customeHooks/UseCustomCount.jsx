import React from 'react'
import useCounter from '../../../createHook/useCounter';

function UseCustomCount() {
    const [count, incrementCount, decrementCount , resetCount] = useCounter(10, 10);

  return (
    <div>
        <h2>Count: {count}</h2>
        <button onClick={incrementCount}>increment</button>
        <button onClick={decrementCount}>decrement</button>
        <button onClick={resetCount}>reset</button>
    </div>
  )
}

export default UseCustomCount