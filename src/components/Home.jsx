import { Link } from 'react-router-dom';

const Home = ({categories, setCategories}) => {
  return (
    <>
      <section>
        <Link to="/reviews">
          <h2>All Reviews</h2>
        </Link>
        <h3>Cat 1</h3>
        <h3>Cat 2</h3>
        <h3>Cat 3</h3>
        <h3>Cat 4</h3>
        <h3>Cat 5</h3>
        <h3>Cat 6</h3>
        <h3>Cat 7</h3>
      </section>
    </>
  );
};
export default Home;
