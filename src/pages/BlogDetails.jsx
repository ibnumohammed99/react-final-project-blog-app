import { useParams } from "react-router-dom";
import posts from "../data/posts";

function BlogDetails() {
  const { id } = useParams();

  const post = posts.find((post) => post.id === Number(id));

  return (
    <div>
      <h1>{post.title}</h1>

      <p>{post.description}</p>

      <p>Category: {post.category}</p>

      <p>By {post.author}</p>
    </div>
  );
}

export default BlogDetails;
