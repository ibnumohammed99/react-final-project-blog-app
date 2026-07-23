import { Link } from "react-router-dom";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Build.
          <br />
          Learn.
          <br />
          Share.
        </h1>

        <p>
          Discover articles about React, JavaScript, and modern web development.
        </p>

        <div className="hero-buttons">
          <Link to="/blogs" className="primary-btn">
            Explore Blogs
          </Link>

          <Link to="/create-post" className="secondary-btn">
            Create Post
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
