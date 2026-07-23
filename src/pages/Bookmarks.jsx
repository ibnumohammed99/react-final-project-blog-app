import { useAtom } from "jotai";
import { bookmarkAtom } from "../atoms/bookmarkAtom";
import "../styles/Bookmarks.css";

function Bookmarks() {
  const [bookmarks, setBookmarks] = useAtom(bookmarkAtom);

  const removeBookmark = (id) => {
    const updatedBookmarks = bookmarks.filter((post) => post.id !== id);

    setBookmarks(updatedBookmarks);

    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  };

  return (
    <div className="bookmarks-container">
      <h1>Your Bookmarks</h1>

      {bookmarks.length === 0 ? (
        <p className="empty-bookmarks">No bookmarks yet 🔖</p>
      ) : (
        <div className="bookmark-grid">
          {bookmarks.map((post) => (
            <div className="bookmark-card" key={post.id}>
              <h2>{post.title}</h2>

              <p>{post.description}</p>

              <span>{post.category}</span>

              <p>By {post.author}</p>

              <button onClick={() => removeBookmark(post.id)}>
                Remove Bookmark
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Bookmarks;
