import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Login from "./pages/Login";
import BlogDetails from "./pages/BlogDetails";
import CreatePost from "./pages/CreatePost";
import Articles from "./pages/Articles";
import Bookmarks from "./pages/Bookmarks";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>
    </>
  );
}

export default App;
