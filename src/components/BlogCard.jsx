import "../styles/BlogCard.css";
function BlogCard({ post }) {
  return (
    <div className="blog-card">
      <h2>{post.title}</h2>

      <p>{post.description}</p>

      <span>{post.category}</span>

      <p>By {post.author}</p>
    </div>
  );
}

export default BlogCard;
