import React, { useState, useEffect } from "react";

function HookInterval() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>timer: {count}</div>;
}

export default HookInterval;
