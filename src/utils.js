import axios from 'axios';

const api = axios.create({
  baseURL: 'https://nc-games-be-project-oudm.onrender.com/api',
});

const getReviews = () => {
  return api.get('/reviews').then(({data}) => {
    return data.reviews;
  });
};

const getReviewById = (review_id) => {
  return api.get(`/reviews/${review_id}`).then(({data}) => {
    return data.review;
  })
}

const getCategories = () => {
  return api.get('/categories').then(({data}) => {
    return data.categories;
  })
}

export { getReviews, getCategories, getReviewById };
