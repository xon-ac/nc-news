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
