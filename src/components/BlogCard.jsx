import { useAtom } from "jotai";
import { useState } from "react";
import { bookmarkAtom } from "../atoms/bookmarkAtom";
import { Link } from "react-router-dom";
import "../styles/BlogCard.css";

function BlogCard({ post, deletePost }) {
  const [bookmarks, setBookmarks] = useAtom(bookmarkAtom);

  const savedLikes = JSON.parse(localStorage.getItem("likes")) || {};

  const [likes, setLikes] = useState(savedLikes[post.id] || post.likes || 0);

  const isBookmarked = bookmarks.some((item) => item.id === post.id);

  const handleBookmark = () => {
    let updatedBookmarks;

    if (isBookmarked) {
      updatedBookmarks = bookmarks.filter((item) => item.id !== post.id);
    } else {
      updatedBookmarks = [...bookmarks, post];
    }

    setBookmarks(updatedBookmarks);

    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  };

  const handleLike = () => {
    const newLikes = likes + 1;

    setLikes(newLikes);

    const updatedLikes = {
      ...savedLikes,
      [post.id]: newLikes,
    };

    localStorage.setItem("likes", JSON.stringify(updatedLikes));
  };

  return (
    <div className="blog-card">
      {/* Bookmark moved to top right */}
      <button
        className="bookmark-button"
        onClick={handleBookmark}
        aria-label="bookmark"
      >
        {isBookmarked ? "🔖" : "📑"}
      </button>

      <Link to={`/blog/${post.id}`} className="blog-link">
        <h2>{post.title}</h2>

        <p>{post.description}</p>

        <span className="category-badge">{post.category}</span>
      </Link>

      <div className="card-actions">
        <button className="like-button" onClick={handleLike}>
          ❤️ {likes} likes
        </button>

        <Link to={`/edit-post/${post.id}`}>Edit</Link>

        <button onClick={() => deletePost(post.id)}>Delete</button>
      </div>
    </div>
  );
}

export default BlogCard;
