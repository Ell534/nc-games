import { getReviews } from '../utils';
import { useState, useEffect } from 'react';

const ReviewCards = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getReviews().then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
    });
  }, []);

  console.log(reviews);

  return (
    <>
      <p>Here is a card</p>
      <section>
        <ul>
          {reviews.map((review) => {
            return (
              <li key={review.review_id}>
                <h4>{review.title}</h4>
                <img src={review.review_img_url} alt='The boardgame that the review relates to'/>
                <p>Category: {review.category}</p>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  );
};

export default ReviewCards;
