import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginFeature } from "../store/auth/actions";

export const Login = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  var dispatch = useDispatch();
  const handleLogin = () => {
    let payload = { username: username, password: password };
    dispatch(loginFeature(payload));
  };
  const { loading, error, usernames } = useSelector((state) => ({
    loading: state.auth.loading,
    error: state.auth.error,
    usernames: state.auth.usernames,
  }));
  return (
    <div style={{ marginTop: "100px" }}>
      <div>
        <label>Username:</label>
        <input
          value={username}
          type="text"
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          value={password}
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      {loading ? (
        <h1>...loading please wait</h1>
      ) : error ? (
        <h1>Something went wrong</h1>
      ) : (
        usernames && (
          <>
            <h1>Welcome to our website {usernames}</h1>
          </>
        )
      )}
    </div>
  );
};
