import React, { useState, useEffect } from "react";
import useDocumentTitle from "../../../createHook/useDocumentTitle";

function UseDocHookOne() {
  const [count, setCount] = useState(0);

  useDocumentTitle(count);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        custom hook count {count}
      </button>
    </div>
  );
}

export default UseDocHookOne;
