import CategoryBar from '../components/CategoryBar';
import ReviewCards from './ReviewCards';

const Reviews = () => {
  return (
    <>
      <CategoryBar />
      <section>
        <h3>Reviews</h3>
        <section>Sort By Options Order By Options</section>
        Review Cards Here
        <ReviewCards />
      </section>
    </>
  );
};

export default Reviews;
