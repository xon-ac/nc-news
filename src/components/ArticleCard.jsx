import React from "react";

const ArticleCard = ({ articles }) => {
   const { title, article_img_url, author, body, created_at, votes, } = articles
    return (
        <div className="ArticleCard">
            <h2>{title}</h2>
            <img className="ArticleImage" src={article_img_url} alt={title} />
            <p>{body}</p>
            <h3>{author}</h3>
            <h3>{votes}</h3>
            <footer>{created_at}</footer>
        </div>
    )
}

export default ArticleCard;