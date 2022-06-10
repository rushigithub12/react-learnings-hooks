import React, { useState, useEffect } from "react";
import axios from 'axios';
import useFetch from "../../../createHook/useFetch";

function UseFetch() {
    const [data] = useFetch('https://jsonplaceholder.typicode.com/posts');

  return (
    <div>
      {data &&
        data.map((item) => {
          return <div key={item.id}>{item.title}</div>;
        })}
    </div>
  );
}

export default UseFetch;
