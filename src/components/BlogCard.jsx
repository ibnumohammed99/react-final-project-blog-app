import { Link } from "react-router-dom";
import "../styles/BlogCard.css";

function BlogCard({ post, deletePost }) {
  return (
    <Link to={`/blog/${post.id}`} className="blog-link">
      <div className="blog-card">
        <h2>{post.title}</h2>

        <p>{post.description}</p>

        <span>{post.category}</span>

        <p>By {post.author}</p>
        <button
          onClick={(e) => {
            e.preventDefault();
            deletePost(post.id);
          }}
        >
          Delete
        </button>
      </div>
    </Link>
  );
}

export default BlogCard;
