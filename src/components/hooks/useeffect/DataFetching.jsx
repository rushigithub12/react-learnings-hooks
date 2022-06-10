import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idBtn, setIdBtn] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idBtn}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idBtn]);

  const handleClick = () => {
    setIdBtn(id);
  }

  return (
    <div>
      fetch data
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>Fetch Posts</button>
      <div>{post.title}</div>
    </div>
  );
}

export default DataFetching;
