import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/EditPost.css";

function EditPost({ posts, setPosts }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find((post) => post.id === Number(id));

  const [title, setTitle] = useState(post.title);
  const [author, setAuthor] = useState(post.author);
  const [category, setCategory] = useState(post.category);
  const [description, setDescription] = useState(post.description);

  const handleUpdate = () => {
    const updatedPost = {
      ...post,
      title,
      author,
      category,
      description,
    };

    setPosts((previousPosts) =>
      previousPosts.map((item) => (item.id === post.id ? updatedPost : item)),
    );

    navigate(`/blog/${post.id}`);
  };

  return (
    <div className="edit-post-container">
      <h1>Edit Post</h1>

      <label>Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>Author</label>
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <label>Category</label>
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <label>Description</label>
      <textarea
        rows="5"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={handleUpdate}>Save Changes</button>
    </div>
  );
}

export default EditPost;
