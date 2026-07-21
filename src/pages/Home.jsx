import posts from "../data/posts";
import BlogCard from "../components/BlogCard";
import "../styles/Home.css";

function Home() {
  return (
    <div>
      <h1>Welcome to MyBlog</h1>

      <div className="blog-grid">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Home;
