import CategoryBar from '../components/CategoryBar';
import ReviewCards from './ReviewCards';
import { useState } from 'react';

const Reviews = ({
  category,
  setCategory,
  categories,
  setCategories,
  isLoading,
  setIsLoading,
  searchParams,
  setSearchParams
}) => {
  const [order, setOrder] = useState('');
  const [sortBy, setSortBy] = useState('');

  return (
    <>
      <CategoryBar
        categories={categories}
        setCategories={setCategories}
        category={category}
        setCategory={setCategory}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <h3>Reviews</h3>
      <p>*placeholder*Sort By Options Order By Options*placeholder*</p>
      <section>
        <ReviewCards
          searchParams={searchParams}
          category={category}
          order={order}
          sortBy={sortBy}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      </section>
    </>
  );
};

export default Reviews;
