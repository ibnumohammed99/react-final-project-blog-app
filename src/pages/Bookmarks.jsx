import { useAtom } from "jotai";
import { bookmarkAtom } from "../atoms/bookmarkAtom";
import BlogCard from "../components/BlogCard";

function Bookmarks() {
  const [bookmarks, setBookmarks] = useAtom(bookmarkAtom);

  const removeBookmark = (id) => {
    setBookmarks(bookmarks.filter((post) => post.id !== id));
  };

  return (
    <div>
      <h1>Bookmarks</h1>

      {bookmarks.length === 0 ? (
        <p>No bookmarks yet.</p>
      ) : (
        bookmarks.map((post) => (
          <BlogCard
            key={post.id}
            post={post}
            deletePost={() => removeBookmark(post.id)}
          />
        ))
      )}
    </div>
  );
}

export default Bookmarks;
