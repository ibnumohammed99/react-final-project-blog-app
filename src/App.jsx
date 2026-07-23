import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Login from "./pages/Login";
import BlogDetails from "./pages/BlogDetails";
import CreatePost from "./pages/CreatePost";
import Articles from "./pages/Articles";
import Bookmarks from "./pages/Bookmarks";
import EditPost from "./pages/EditPost";

import postsData from "./data/posts";
import useFetchPosts from "./hooks/useFetchPosts";

import { ThemeProvider, useTheme } from "./context/ThemeContext";

function App() {
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem("posts");

    return savedPosts ? JSON.parse(savedPosts) : postsData;
  });

  const { apiPosts, loading, error } = useFetchPosts();

  const { darkMode } = useTheme();

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    if (apiPosts.length > 0) {
      setPosts((previousPosts) => {
        const existingIds = previousPosts.map((post) => post.id);

        const newPosts = apiPosts

          .filter((post) => !existingIds.includes(post.id))

          .map((post) => ({
            id: post.id,

            title: post.title,

            description: post.body,

            author: `User ${post.userId}`,

            category: post.tags?.[0] || "General",
          }));

        return [...previousPosts, ...newPosts];
      });
    }
  }, [apiPosts]);

  const deletePost = (id) => {
    setPosts((previousPosts) => previousPosts.filter((post) => post.id !== id));
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Navbar />

      {loading && <p>Loading posts...</p>}

      {error && <p>{error}</p>}

      <Routes>
        <Route
          path="/"
          element={<Home posts={posts} deletePost={deletePost} />}
        />

        <Route
          path="/blogs"
          element={<Blogs posts={posts} deletePost={deletePost} />}
        />

        <Route path="/about" element={<About />} />

        <Route path="/login" element={<Login />} />

        <Route path="/blog/:id" element={<BlogDetails posts={posts} />} />

        <Route
          path="/create-post"
          element={<CreatePost setPosts={setPosts} />}
        />

        <Route path="/articles" element={<Articles />} />

        <Route
          path="/edit-post/:id"
          element={<EditPost posts={posts} setPosts={setPosts} />}
        />

        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>

      <Footer />
    </div>
  );
}

function AppWrapper() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default AppWrapper;
