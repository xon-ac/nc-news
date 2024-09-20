import axios from 'axios';

const api = axios.create({
    baseURL: 'https://nc-news-53nl.onrender.com/api'
});

export const fetchArticles = () => {
    return api.get('/articles')
        .then((response) => {
            return response.data.articles;
        })
        .catch((error) => {
            console.log(error, '<--error in api articles catch')
            throw error;
        })
};

export const fetchArticleById = (article_id) => {
    return api.get(`/articles/${article_id}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error, '<---error in api article by id in catch')
            throw error;
        })
};

export const fetchCommentsByArticleId = (article_id) => {
    return api.get(`/articles/${article_id}/comments`)
        .then((response) => {
            return response.data.comments;
        })
        .catch((error) => {
            console.log(error, '<---error in fetching comments')
            throw error;
        })
};