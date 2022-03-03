import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Users } from "./components/Users";
import { UserPosts } from "./components/UserPosts";
import { AllPosts } from "./components/AllPosts";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>HOME PAGE</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id/posts" element={<UserPosts />} />
        <Route path="/posts" element={<AllPosts />} />
      </Routes>
    </div>
  );
}

export default App;
