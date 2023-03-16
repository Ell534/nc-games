import { getReviews } from '../utils';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ReviewCards = ({
  order,
  sortBy,
  isLoading,
  setIsLoading,
  searchParams,
}) => {
  const [reviews, setReviews] = useState([]);
  const categoryQuery = searchParams.get('category');

  useEffect(() => {
    setIsLoading(true);
    getReviews(categoryQuery).then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
      setIsLoading(false);
    });
  }, [categoryQuery, setIsLoading]);

  if (isLoading) {
    return <h4>Reviews loading, please wait...</h4>;
  }

  return (
    <>
      <ul className="reviewsList">
        {reviews.map((review) => {
          return (
            <li key={review.review_id}>
              <Link to={`/reviews/${review.review_id}`}>
                <h4>Title: {review.title}</h4>
                <img
                  src={review.review_img_url}
                  alt="The boardgame that the review relates to"
                  className="reviewsList__img"
                />
              </Link>
              <p>Category: {review.category}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ReviewCards;
