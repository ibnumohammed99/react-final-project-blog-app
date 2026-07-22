import { useParams } from "react-router-dom";

function BlogDetails({ posts }) {
  const { id } = useParams();

  const post = posts.find((post) => post.id === Number(id));

  if (!post) {
    return (
      <div>
        <h1>Post not found</h1>
      </div>
    );
  }

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
