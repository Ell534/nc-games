import CategoryBar from './CategoryBar';
import { Link } from 'react-router-dom';

const Home = ({
  setCategory,
  categories,
  setCategories,
  searchParams,
  setSearchParams,
}) => {
  return (
    <>
      <section>
        <Link to="/reviews">
          <h2>All Reviews</h2>
        </Link>
        <CategoryBar
          setCategory={setCategory}
          categories={categories}
          setCategories={setCategories}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      </section>
    </>
  );
};
export default Home;
