function PostForm({
  title,
  setTitle,
  author,
  setAuthor,
  category,
  setCategory,
  description,
  setDescription,
  handleSubmit,
  buttonText,
}) {
  return (
    <form onSubmit={handleSubmit} className="create-post-form">
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Author</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Category</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          rows="5"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button className="create-post-button" type="submit">
        {buttonText}
      </button>
    </form>
  );
}

export default PostForm;
