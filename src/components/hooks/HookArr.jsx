import React, { useState } from "react";

function HookArr() {
  const [items, setItmems] = useState([]);

  const addNumber = () => {
    setItmems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <div>
      <button onClick={addNumber}>Add Number</button>
      <ul>
        {items.map((item) => {
          return <li key={item.id}>{item.value}</li>;
        })}
      </ul>
    </div>
  );
}

export default HookArr;
