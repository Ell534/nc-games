import { useState } from 'react';
import CommentsCards from './CommentsCards';
import { postComment } from '../utils';

const Comments = ({ review_id, user }) => {
  const [commentsList, setCommentsList] = useState([]);
  const [submitComment, setSubmitComment] = useState(false);
  const [commentError, setCommentError] = useState(false);
  const [commentRequest, setCommentRequest] = useState({
    username: user,
    body: '',
  });

  const commentSubmit = (event) => {
    event.preventDefault();
    setSubmitComment(true);
    setCommentError(false);
    postComment(review_id, commentRequest).then((commentResponse) => {
      setCommentsList((currentComments) => {
        return [commentResponse, ...currentComments]
      })
      setSubmitComment(false);
      commentRequest.body = '';
    }).catch(() => {
      setCommentError(true)
    })
  };


  return (
    <>
      {!commentError ? (
        <form onSubmit={commentSubmit} className='commentForm'>
          <textarea
          className='commentForm__body'
            value={commentRequest.body}
            onChange={(event) => {
              setCommentRequest({
                ...commentRequest,
                body: event.target.value,
              });
            }}
            placeholder="Enter your comment here..."
            required
            rows={7}
            cols={75}
          ></textarea>
          <button type="submit" className='commentForm__btn' disabled={submitComment}>
            Post your comment!
          </button>
        </form>
      ) : (
        <p className='commentError'>
          There was a problem sending your comment, please refresh and try
          again, thank you!
        </p>
      )}
      <CommentsCards
        commentsList={commentsList}
        setCommentsList={setCommentsList}
        review_id={review_id}
      />
    </>
  );
};

export default Comments;
