import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import PostForm from "../components/PostForm";
import "../styles/EditPost.css";

function EditPost({ posts, setPosts }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find((post) => post.id === Number(id));

  if (!post) {
    return <h1>Post not found</h1>;
  }

  const [title, setTitle] = useState(post.title);
  const [author, setAuthor] = useState(post.author);
  const [category, setCategory] = useState(post.category);
  const [description, setDescription] = useState(post.description);

  const handleUpdate = (e) => {
    e.preventDefault();

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

      <PostForm
        title={title}
        setTitle={setTitle}
        author={author}
        setAuthor={setAuthor}
        category={category}
        setCategory={setCategory}
        description={description}
        setDescription={setDescription}
        handleSubmit={handleUpdate}
        buttonText="Save Changes"
      />
    </div>
  );
}

export default EditPost;
