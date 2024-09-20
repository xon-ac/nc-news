import axios from 'axios'

const newsApi = axios.create({
    baseURL: 'https://nc-news-lenc.onrender.com/api',
});

export const fetchArticles = () => {
    return newsApi
    .get('/articles', {
    })
    .then(({ data }) => {
        return data.articles
    });
};

export const fetchArticleById = (article_id) => {
    return fetch(`/api/articles/${article_id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch article: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        return data;
      });
  };

export default fetchArticles; fetchArticleById;