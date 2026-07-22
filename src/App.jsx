import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Login from "./pages/Login";
import BlogDetails from "./pages/BlogDetails";
import CreatePost from "./pages/CreatePost";
import Articles from "./pages/Articles";
import Bookmarks from "./pages/Bookmarks";

import postsData from "./data/posts";

function App() {
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem("posts");

    return savedPosts ? JSON.parse(savedPosts) : postsData;
  });

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);
  const deletePost = (id) => {
    setPosts((previousPosts) => previousPosts.filter((post) => post.id !== id));
  };

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home posts={posts} deletePost={deletePost} />}
        />

        <Route path="/blogs" element={<Blogs />} />

        <Route path="/about" element={<About />} />

        <Route path="/login" element={<Login />} />

        <Route path="/blog/:id" element={<BlogDetails posts={posts} />} />

        <Route
          path="/create-post"
          element={<CreatePost setPosts={setPosts} />}
        />

        <Route path="/articles" element={<Articles />} />

        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>
    </>
  );
}

export default App;
