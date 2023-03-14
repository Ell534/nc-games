import { getReviews } from '../utils';
import { useState, useEffect } from 'react';

const ReviewCards = ({ category, order, sortBy }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews(category, order, sortBy).then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
    });
  }, []);

  return (
    <>
      <ul className='reviewsList'>
        {reviews.map((review) => {
          return (
            <li key={review.review_id}>
              <h4>Title: {review.title}</h4>
              <img
                src={review.review_img_url}
                alt="The boardgame that the review relates to"
                className="reviewsList__img"
              />
              <p>Category: {review.category}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ReviewCards;
