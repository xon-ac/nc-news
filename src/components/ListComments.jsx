import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import { fetchCommentsByArticleId } from "../app";

export default function ListComments({ article_id }) {
  const [newComment, setNewComment] = useState([{ username: "", body: "" }]);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    if (article_id) {
      fetchCommentsByArticleId(article_id)
        .then((data) => {
          setIsLoading(false);
          setIsError(false);
          setComments(data);
        })
        .catch((error) => {
          setIsLoading(false);
          setIsError(true);
        });
    }
  }, [article_id]);

  return (
    <>
      <h3 id="comments-header">Comments</h3>
      {comments.length >= 1 ? (
        comments.map((comment, index) => {
          return <CommentCard key={index} comment={comment} newComment={newComment} setNewComment={setNewComment}/>;
        })
      ) : (
        <p>There are not comments for this post yet.</p>
      )}
    </>
  );
}