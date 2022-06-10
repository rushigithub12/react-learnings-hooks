import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetchingState() {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        console.log(res);
        setLoading(false);
        setPost(res.data);
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setPost({});
        setError("Something went wrong");
      });
  }, []);

  return (
    <div>
      {loading ? "Loading" : post.title}
      {error ? error : null}
    </div>
  );
}

export default DataFetchingState;
