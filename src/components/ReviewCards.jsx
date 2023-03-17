import { getReviews } from '../utils';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ReviewCards = ({ isLoading, setIsLoading, searchParams }) => {
  const [reviews, setReviews] = useState([]);
  const categoryQuery = searchParams.get('category');
  const sortByQuery = searchParams.get('sort_by');
  const orderQuery = searchParams.get('order');

  useEffect(() => {
    setIsLoading(true);
    getReviews(categoryQuery, sortByQuery, orderQuery).then(
      (reviewsFromApi) => {
        setReviews(reviewsFromApi);
        setIsLoading(false);
      }
    );
  }, [categoryQuery, sortByQuery, orderQuery, setIsLoading]);

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
              <h5>Author: {review.owner}</h5>
              <p>Category: {review.category}</p>
              <p>
                Date posted:{' '}
                {new Date(review.created_at).toLocaleDateString('en-GB')}
              </p>
              <p>Comments: {review.comment_count}</p>
              <p>Votes: {review.votes}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ReviewCards;
