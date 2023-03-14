import CategoryBar from '../components/CategoryBar';
import ReviewCards from './ReviewCards';
import { useState } from 'react';

const Reviews = ({ categories, setCategories, isLoading, setIsLoading }) => {
  const [order, setOrder] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [category, setCategory] = useState('')

  return (
    <>
      <CategoryBar categories={categories} setCategories={setCategories} setCategory={setCategory} />
        <h3>Reviews</h3>
        <p>*placeholder*Sort By Options Order By Options*placeholder*</p>
      <section>
        <ReviewCards category={category} order={order} sortBy={sortBy} isLoading={isLoading} setIsLoading={setIsLoading} />
      </section>
    </>
  );
};

export default Reviews;
