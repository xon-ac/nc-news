import { useState, useEffect } from "react";
import { fetchArticles } from "./api";
import ArticleCard from "./ArticleCard"
//import { useParams } from "react-router-dom"

const ListArticles = () => {
    const [articles, setArticles] = useState([]);
    
    useEffect(() => {
        fetchArticles()
          .then((articles) => {
            setArticles(articles);
          })
          .catch((error) => {
            console.error('Error fetching articles:', error);
          });
      }, []);

        return (
            <ul className="articles">
                {articles.map((articles) => {
                    return (
                        <li key={articles.article_id}>
                            <ArticleCard articles={articles}></ArticleCard>
                        </li>
                    )
                })}
            </ul>
        )
    
}

export default ListArticles