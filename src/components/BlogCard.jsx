import { Link } from "react-router-dom";
import "../styles/BlogCard.css";

function BlogCard({ post, deletePost }) {
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
      </div>
    </div>
  );
}

export default BlogCard;
