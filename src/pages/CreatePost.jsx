import { useState } from "react";
import "../styles/CreatePost.css";
import PostForm from "../components/PostForm";

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

      <PostForm
        title={title}
        setTitle={(value) => {
          setTitle(value);
          setError("");
        }}
        author={author}
        setAuthor={(value) => {
          setAuthor(value);
          setError("");
        }}
        category={category}
        setCategory={(value) => {
          setCategory(value);
          setError("");
        }}
        description={description}
        setDescription={(value) => {
          setDescription(value);
          setError("");
        }}
        handleSubmit={handleSubmit}
        buttonText="Create Post"
      />
    </div>
  );
}

export default CreatePost;
