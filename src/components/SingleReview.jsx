import { useParams } from 'react-router-dom';
import { getReviewById } from '../utils';
import { useState, useEffect } from 'react';
import CategoryBar from './CategoryBar';

const SingleReview = ({
  isLoading,
  setIsLoading,
  categories,
  setCategories,
}) => {
  const [review, setReview] = useState([]);

  const { review_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getReviewById(review_id).then((reviewFromApi) => {
      setReview(reviewFromApi[0]);
      setIsLoading(false);
    });
  }, [review_id]);

  console.log(review);
  const {
    title,
    review_img_url,
    designer,
    category,
    owner,
    votes,
    comment_count,
    review_body,
  } = review;

  if (isLoading) {
    return <p>The review is loading, please wait...</p>;
  }

  return (
    <>
      <CategoryBar categories={categories} setCategories={setCategories} />
      <section className='singleReview'>
        <h3 className='singleReview__title'>{title}</h3>
        <img className='singleReview__img' src={review_img_url} alt='"The boardgame that the review relates to"'/>
        <ul className='singleReview__details'>
          <li>Designer: {designer}</li>
          <li>Category: {category}</li>
          <li>Review Author: {owner}</li>
          <li>Votes: {votes}</li>
          <li>Comments: {comment_count}</li>
        </ul>
        <p className='singleReview__body'>{review_body}</p>
      </section>
    </>
  );
};

export default SingleReview;
