import axios from 'axios';

const api = axios.create({
  baseURL: 'https://nc-games-be-project-oudm.onrender.com/api',
});

const getReviews = () => {
  return api.get('/reviews').then(({data}) => {
    return data.reviews;
  });
};

export { getReviews };
