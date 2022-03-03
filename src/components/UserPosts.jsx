import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const UserPosts = () => {
  let { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    getUserPosts();
  }, []);
  const getUserPosts = () => {
    setLoading(true);
    fetch(`http://localhost:3020/posts/${id}`)
      .then((r) => r.json())
      .then((r) => {
        setLoading(false);
        setData([r]);
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
      });
  };

  return (
    <div>
      {loading ? (
        <h1>...loading </h1>
      ) : error ? (
        <h1>something is wrong</h1>
      ) : (
        <>
          {" "}
          <h1>This is the user's post page</h1>
          {data && (
            <div>
              {data.map((item) => (
                <div
                  style={{
                    border: "1px solid black",
                    width: "200px",
                    margin: "auto",
                  }}
                  key={item.id}
                >
                  <h1>{item.post_title}</h1>
                  <h4>{item.post_body}</h4>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};
