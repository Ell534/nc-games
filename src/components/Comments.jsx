import CommentsCards from './CommentsCards';

const Comments = ({review_id}) => {
  return (
    <>
      <p>I am the comments, will be adding a post comment feature here</p>
      <CommentsCards review_id={review_id}/>
    </>
  );
};

export default Comments;
