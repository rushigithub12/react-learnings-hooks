import React, { useState, useEffect } from "react";

function EffectHook() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//   }, []);

    //   useEffect(() => {
    //     setCalculation(() => count * 2);
    //   }, [count]);
     useEffect(() => {
         let timer = setTimeout(() => {
            setCount((count) => count + 1)
         }, 1000);

         return () => clearTimeout(timer)
     }, [])

  return <div>
      {/* <h3>calculations: {calculation}</h3>
      <button onClick={() => setCount(c => c + 1)}>click</button>
      <h3>Count: {count}</h3> */}
      <h3>Count: {count}</h3>
  </div>;
}

export default EffectHook;
