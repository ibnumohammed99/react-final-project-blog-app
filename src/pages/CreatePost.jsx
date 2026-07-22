import { useState } from "react";
import "../styles/CreatePost.css";

function CreatePost({ setPosts }) {
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !author || !category || !description) {
      setError("Please fill all fields before creating a post");
      return;
    }

    const newPost = {
      id: Date.now(),
      title,
      author,
      category,
      description,
    };

    setPosts((previousPosts) => [...previousPosts, newPost]);

    setTitle("");
    setAuthor("");
    setCategory("");
    setDescription("");
    setError("");
  };

  return (
    <div className="create-post-container">
      <h1>Create New Post</h1>
      {error && <div className="error-message">⚠️ {error}</div>}
      <form className="create-post-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setError("");
            }}
          />
        </div>

        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
              setError("");
            }}
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setError("");
            }}
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            rows="5"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              setError("");
            }}
          />
        </div>

        <button className="create-post-button" type="submit">
          Create Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
