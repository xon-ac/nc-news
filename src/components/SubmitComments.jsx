import axios from "axios";
import { useState} from "react";

export default function SubmitComments({ article_id }) {
  const [newComment, setNewComment] = useState([{ username: "", body: "" }]);
  const [hasCommentSubmitted, setHasCommentSubmitted] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setNewComment((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    setHasCommentSubmitted(true);
    event.preventDefault();
    setNewComment(newComment);
    axios.post(
      "https://nc-news-53nl.onrender.com/api/articles/" +
        article_id +
        "/comments",
      newComment
    );
  };

  if (hasCommentSubmitted) {
    return (
      <p id="comment-submit-confirmation">your comment has been submitted</p>
    );
  }

  return (
    <div className="comment-form-container">
      <form onSubmit={handleSubmit} className="form-container">
        <input
          name="username"
          value={newComment.author}
          onChange={handleChange}
          className="submit-comment"
          placeholder="username"
        ></input>
        <input
          name="body"
          value={newComment.body}
          onChange={handleChange}
          className="submit-comment"
          placeholder="add a comment..."
        ></input>
        <button
          type="submit"
          className="submit-comment"
          id="submit-comment-button"
        >
          Submit
        </button>
      </form>
    </div>
  );
}