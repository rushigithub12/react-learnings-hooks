import React from "react";
import useCounter from "../../../createHook/useCounter";

function UseCustomCountTwo() {
    const [count, incrementCount, decrementCount , resetCount] = useCounter(0, 1);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={incrementCount}>increment</button>
      <button onClick={decrementCount}>decrement</button>
      <button onClick={resetCount}>reset</button>
    </div>
  );
}

export default UseCustomCountTwo;
