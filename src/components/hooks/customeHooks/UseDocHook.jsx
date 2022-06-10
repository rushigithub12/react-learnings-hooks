import React, { useState, useEffect } from "react";
import useDocumentTitle from "../../../createHook/useDocumentTitle";

function UseDocHook() {
  const [count, setCount] = useState(0);

  useDocumentTitle(count);//first custom hooks

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
    </div>
  );
}

export default UseDocHook;
