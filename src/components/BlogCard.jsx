import { useAtom } from "jotai";
import { bookmarkAtom } from "../atoms/bookmarkAtom";
import { Link } from "react-router-dom";
import "../styles/BlogCard.css";

function BlogCard({ post, deletePost }) {
  const [bookmarks, setBookmarks] = useAtom(bookmarkAtom);

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

  return (
    <div className="blog-card">
      <Link to={`/blog/${post.id}`} className="blog-link">
        <h2>{post.title}</h2>

        <p>{post.description}</p>

        <span>{post.category}</span>

        <p>By {post.author}</p>
      </Link>

      <div className="card-actions">
        <Link to={`/edit-post/${post.id}`}>Edit</Link>

        <button onClick={() => deletePost(post.id)}>Delete</button>

        <button onClick={handleBookmark}>
          {isBookmarked ? "Remove Bookmark" : "Bookmark"}
        </button>
      </div>
    </div>
  );
}

export default BlogCard;
