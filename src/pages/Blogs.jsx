import BlogCard from "../components/BlogCard";
import "../styles/Blogs.css";

function Blogs({ posts, deletePost }) {
  return (
    <div className="blogs-container">
      <h1>All Blogs</h1>

      <p className="blogs-intro">
        Explore all articles published on BlogSphere.
      </p>

      <div className="blogs-list">
        {posts.length > 0 ? (
          posts.map((post) => (
            <BlogCard key={post.id} post={post} deletePost={deletePost} />
          ))
        ) : (
          <p>No blogs available.</p>
        )}
      </div>
    </div>
  );
}

export default Blogs;
