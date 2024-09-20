import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import SingleArticleCard from "./SingleArticleCard";

export default function ArticleCards({ article }) {
  const readableDate = new Date(article.created_at);
  const formatDate = readableDate.toDateString();

  return (
    <>
      <div className="article-card">
        <Card className="item-card" style={{ width: "30rem" }}>
          <Card.Img
            variant="top"
            src={article.article_img_url}
            alt={article.title}
          />
          <Card.Body>
            <Link to={"/article/" + article.article_id}>
              <Card.Title><h2>{article.title}</h2></Card.Title>
            </Link>
            <Card.Text className="topic">{article.topic}</Card.Text>
            <Card.Text>{formatDate}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}