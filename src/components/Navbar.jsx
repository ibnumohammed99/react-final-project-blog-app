import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

import "../styles/Navbar.css";

function Navbar() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <h2 className="logo">BlogSphere</h2>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/blogs">Blogs</Link>
        </li>

        <li>
          <Link to="/articles">Articles</Link>
        </li>

        <li>
          <Link to="/create-post">Create Post</Link>
        </li>

        <li>
          <Link to="/bookmarks">Bookmarks</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>

      <button className="theme-button" onClick={toggleTheme}>
        {darkMode ? "☀️" : "🌙"}
      </button>
    </nav>
  );
}

export default Navbar;
