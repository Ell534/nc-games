import axios from 'axios';

const api = axios.create({
  baseURL: 'https://nc-games-be-project-oudm.onrender.com/api',
});

const getReviews = (category) => {
  return api.get(`/reviews`, {
    params: {
      category
    }
  }).then(({ data }) => {
    return data.reviews;
  });
};

const getReviewById = (review_id) => {
  return api.get(`/reviews/${review_id}`).then(({ data }) => {
    return data.review;
  });
};

const voteForReview = (review_id) => {
  return api
    .patch(`/reviews/${review_id}`, { inc_votes: 1 })
    .then(({data}) => {
      return data.review;
    });
};

const getCategories = () => {
  return api.get('/categories').then(({ data }) => {
    return data.categories;
  });
};

const getCommentsByReviewId = (review_id) => {
  return api.get(`/reviews/${review_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

const postComment = (review_id, commentRequest) => {
  return api.post(`/reviews/${review_id}/comments`, commentRequest).then(({data}) => {
    return data.comment
  })
}

export { getReviews, getCategories, getReviewById, getCommentsByReviewId, voteForReview, postComment };
