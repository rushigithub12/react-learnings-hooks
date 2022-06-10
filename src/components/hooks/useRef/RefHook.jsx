import React, { useState, useEffect, useRef } from "react";

function RefHook() {
  const [inputVal, setInputVal] = useState(0);
//   const count = useRef(0);
//    const inputRef = useRef();
    const previousInputVal = useRef('');

    useEffect(() => {
        previousInputVal.current = inputVal;
    }, [inputVal]);

//    const focusInput = () => {
//     inputRef.current.focus();
//    }

//   useEffect(() => {
//     count.current = count.current + 1;
//   }, []);

  return (
    <div>
      {/* <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      /> */}
      {/* <div>Count - {count.current}</div> */}

      {/* <input type="text" ref={inputRef}/>
      <button onClick={focusInput}>Focus Input</button> */}

      <input type="text" value={inputVal}  onChange={e => setInputVal(e.target.value)} />
      <h3>Current val: {inputVal}</h3>
      <h3>previousVal: {previousInputVal.current}</h3>
    </div>
  );
}

export default RefHook;
