import React, { useState } from "react";

function HookCounterTwo() {
  const initialValue = 0;
  const [count, setCount] = useState(initialValue);

  const clickHandler = () => {
    for (let i = 0; i < 5; i++) {
      setCount(prevCount => prevCount + 1);
    }
  };

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initialValue)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>increment</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>decrement</button>
      <button onClick={clickHandler}>Increment 5</button>
    </div>
  );
}

export default HookCounterTwo;
