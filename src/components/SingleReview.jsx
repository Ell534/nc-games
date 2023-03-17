import { useParams } from 'react-router-dom';
import { getReviewById, voteForReview } from '../utils';
import { useState, useEffect } from 'react';
import CategoryBar from './CategoryBar';
import Comments from './Comments';

const SingleReview = ({
  isLoading,
  setIsLoading,
  categories,
  setCategories,
  user,
}) => {
  const [review, setReview] = useState([]);
  const [userVote, setUserVote] = useState(0);
  const [votingErr, setVotingErr] = useState(false);

  const { review_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getReviewById(review_id).then((reviewFromApi) => {
      setReview(reviewFromApi[0]);
      setIsLoading(false);
    });
  }, [review_id, setIsLoading]);

  const onClick = () => {
    setVotingErr(false);
    setUserVote(1);
    voteForReview(review_id).catch(() => {
      setUserVote(0);
      setVotingErr(true)
    })

  }

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
          <li>Votes: {votes + userVote}</li>
          <li>Comments: {comment_count}</li>
        </ul>
        <p className='singleReview__body'>{review_body}</p>
        <button className='singleReview__voteBtn' onClick={onClick} disabled={userVote !== 0}>Vote for this review!</button>
        {votingErr ? <p className='singleReview__voteError'>Your vote didn't go through, please try again later.</p> : null}
      </section>
      <section>
        <Comments review_id={review_id} user={user}/>
      </section>
    </>
  );
};

export default SingleReview;
