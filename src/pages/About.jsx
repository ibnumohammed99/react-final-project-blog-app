import "../styles/about.css";

function About() {
  return (
    <div className="about-container">
      <h1>About BlogSphere</h1>

      <p className="about-intro">
        BlogSphere is a modern blogging platform built with React. It allows
        users to create, edit, delete, and bookmark posts with a clean and
        responsive interface.
      </p>

      <div className="about-features">
        <h2>Features</h2>

        <ul>
          <li>📝 Create and manage blog posts</li>
          <li>✏️ Edit existing articles</li>
          <li>🗑️ Delete unwanted posts</li>
          <li>🔖 Bookmark favorite blogs</li>
          <li>🌐 Fetch posts from an external API</li>
          <li>💾 Save data using localStorage</li>
        </ul>
      </div>

      <div className="about-tech">
        <h2>Built With</h2>

        <div className="tech-list">
          <span>React</span>
          <span>React Router</span>
          <span>Jotai</span>
          <span>JavaScript</span>
          <span>CSS</span>
        </div>
      </div>
    </div>
  );
}

export default About;
