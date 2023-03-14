import { getReviews } from '../utils';
import { useState, useEffect } from 'react';

const ReviewCards = ({ category, order, sortBy, isLoading, setIsLoading }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getReviews(category, order, sortBy).then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
      setIsLoading(false);
    });
  }, []);

  if(isLoading) {
    return <h4>Reviews loading, please wait...</h4>
  }

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
