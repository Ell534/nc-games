import { useState, useEffect } from 'react';
import { getCommentsByReviewId } from '../utils';

const CommentsCards = ({ commentsList, setCommentsList, review_id }) => {
  const [commentsLoading, setCommentsLoading] = useState(true);

  useEffect(() => {
    setCommentsLoading(true);
    getCommentsByReviewId(review_id).then((commentsFromApi) => {
      setCommentsList(commentsFromApi);
      setCommentsLoading(false);
    });
  }, []);

  if (commentsLoading) {
    return <h4>Comments are loading, please wait...</h4>;
  }

  if (commentsList.length === 0) {
    return (
      <p>
        There are currently no comments for this review, maybe you should be the
        first to add one!
      </p>
    );
  }

  return (
    <ul>
      {commentsList.map((comment) => {
        return (
          <li key={comment.comment_id}>
            <h4>Comment author: {comment.author}</h4>
            <p>Comment: {comment.body}</p>
            <p>Votes: {comment.votes}</p>
            <p>**placeholder** (+1 vote) (-1 vote) (delete) **placeholder**</p>
          </li>
        );
      })}
    </ul>
  );
};

export default CommentsCards;
