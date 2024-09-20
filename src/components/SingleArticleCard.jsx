import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ListComments from "./ListComments";
import { Link } from "react-router-dom";
import SubmitComments from "./SubmitComments";
import { fetchArticleById } from "../app";

export default function SingleArticleCard() {
  const [articleById, setArticleById] = useState([]);
  const [votes, setVotes] = useState(0);
  const { article_id } = useParams();
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    if (article_id) {
      fetchArticleById(article_id)
        .then((data) => {
          setArticleById(data[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const readableDate = new Date(articleById.created_at);
  const formatDate = readableDate.toDateString();
  const voteCount = {
    inc_votes: 1,
  };
  const handleClick = (event) => {
    setVotes((currentVotes) => currentVotes + 1);
    axios
      .patch(
        "https://nc-news-53nl.onrender.com/api/articles/" + article_id,
        voteCount
      )
      .then((response) => {
        setButtonClicked(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div id="back-arrow">
        <Link to={"/"}>
          <i className="fa-sharp fa-solid fa-arrow-left"></i>
        </Link>
      </div>
      <div className="article-container">
        <div className="article">
          <h2>{articleById.title}</h2>
          <img
            id="article-img"
            src={articleById.article_img_url}
            alt={articleById.title}
          />
          <div className="author-and-date">
            <p className="author-or-date">author: {articleById.author}</p>
            <p className="author-or-date">{formatDate}</p>
          </div>
          <p id="article-body">{articleById.body}</p>
          <p className="topic">{articleById.topic}</p>
          <div id="article-votes-container">
            <p>{votes + articleById.votes}</p>
            <button onClick={handleClick} disabled={buttonClicked}>
              <i className="fa-solid fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
      <SubmitComments article_id={article_id} />
      <ListComments article_id={article_id} />
    </>
  );
}