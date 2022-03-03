import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchUsers } from "../store/users/actions";

export const Users = () => {
  const [search, setSearch] = useState("");
  useEffect(() => {
    getUsers();
  }, []);

  const dispatch = useDispatch();
  let { users, loading, error, oneUser } = useSelector((state) => ({
    users: state.user.users,
    loading: state.user.loading,
    error: state.user.error,
    oneUser: state.auth.usernames,
  }));
  const getUsers = () => {
    dispatch(fetchUsers());
  };
  const navigate = useNavigate();
  const handleSearch = () => {
    fetch(`http://localhost:3020/users?q=${search}`)
      .then((r) => r.json())
      .then((r) => {
        console.log(r);
        users = r;
      })
      .catch((e) => console.log(e));
  };
  return (
    <div>
      {oneUser ? (
        <>
          {loading ? (
            <h1>...loading</h1>
          ) : error ? (
            <h1>something went wrong</h1>
          ) : (
            <>
              <div style={{ marginTop: "1rem" }}>
                <label>Search User:</label>
                <input
                  type="text"
                  placeholder="Enter User's Name"
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
              </div>

              <h1>LIST OF ALL USERS</h1>
              {users.map((item) => (
                <div key={item.id}>
                  <Link to={`/users/${item.id}/posts`}>
                    <h4>{item.username}</h4>
                  </Link>
                </div>
              ))}
            </>
          )}
        </>
      ) : (
        navigate("/login")
      )}
    </div>
  );
};
