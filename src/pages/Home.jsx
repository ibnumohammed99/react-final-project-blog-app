import BlogCard from "../components/BlogCard";
import Hero from "../components/Hero";
import "../styles/Home.css";

function Home({ posts, deletePost }) {
  return (
    <div>
      <Hero />

      <section className="blogs-section">
        <h2>Latest Articles</h2>

        <div className="blog-grid">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} deletePost={deletePost} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
