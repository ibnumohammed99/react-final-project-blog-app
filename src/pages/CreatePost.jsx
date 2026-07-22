import { useState } from "react";
import "../styles/CreatePost.css";

function CreatePost({ setPosts }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      title,
      author,
      category,
      description,
    };

    setPosts((previousPosts) => [...previousPosts, newPost]);

    // Clear the form after submission
    setTitle("");
    setAuthor("");
    setCategory("");
    setDescription("");
  };

  return (
    <div className="create-post-container">
      <h1>Create New Post</h1>

      <form className="create-post-form" onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label>Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div>
          <label>Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div>
          <label>Description</label>
          <textarea
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
