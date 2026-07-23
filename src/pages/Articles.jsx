import "../styles/Articles.css";

function Articles() {
  const articles = [
    {
      id: 1,
      title: "React Fundamentals",
      description:
        "Learn components, props, state, and the core concepts of React.",
    },
    {
      id: 2,
      title: "JavaScript Best Practices",
      description:
        "Improve your JavaScript skills with clean and maintainable code.",
    },
    {
      id: 3,
      title: "Modern Frontend Development",
      description:
        "Explore how developers build responsive and interactive websites.",
    },
  ];

  return (
    <div className="articles-container">
      <h1>Latest Articles</h1>

      <p className="articles-intro">
        Explore helpful articles about programming and web development.
      </p>

      <div className="articles-list">
        {articles.map((article) => (
          <div className="article-card" key={article.id}>
            <h2>{article.title}</h2>

            <p>{article.description}</p>

            <button>Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Articles;
