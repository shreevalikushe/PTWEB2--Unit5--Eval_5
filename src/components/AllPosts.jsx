import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPosts } from "../store/users/actions";

export const AllPosts = () => {
  useEffect(() => {
    getAllPosts();
  }, []);
  const dispatch = useDispatch();
  const getAllPosts = () => {
    dispatch(getPosts());
  };
  const navigate = useNavigate();
  const { loading, error, posts, oneUser } = useSelector((state) => ({
    loading: state.user.loading,
    error: state.user.error,
    posts: state.user.posts,
    oneUser: state.auth.usernames,
  }));
  const sortAsc = () => {
    var list = posts.sort((a, b) => {
      console.log(a, b);
      return a.post_title - b.post_title;
    });
  };
  const sortDesc = () => {
    var list = posts.sort((a, b) => b.post_title - a.post_title);
    console.log(list);
  };
  return (
    <div>
      {oneUser ? (
        <>
          {loading ? (
            <h1>...loading</h1>
          ) : error ? (
            <h1>something is wrong</h1>
          ) : (
            <>
              <div style={{ marginTop: "100px" }}>
                <button onClick={sortAsc}>Sort title in ascending order</button>
                <button onClick={sortDesc}>
                  Sort title in descending order
                </button>
              </div>
              <h1>This is the page for all User's Posts</h1>
              <div>
                {posts.map((item) => (
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
            </>
          )}
        </>
      ) : (
        navigate("/login")
      )}
    </div>
  );
};
