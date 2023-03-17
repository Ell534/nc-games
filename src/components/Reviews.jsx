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
  setSearchParams,
}) => {
  const [sortBy, setSortBy] = useState('title');
  const [order, setOrder] = useState('asc');

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
      <section>
        <label htmlFor="sort">Sort reviews by...</label>
        <select
          id="sort"
          value={sortBy}
          onChange={(event) => {
            setSortBy(event.target.value);
            const newSearchParams = new URLSearchParams(searchParams);
            newSearchParams.set('sort_by', event.target.value);
            setSearchParams(newSearchParams);
          }}
        >
          <option value="title">Title</option>
          <option value="owner">Review Author</option>
          <option value="reviews.created_at">Review Date</option>
          <option value="comment_count">Comments</option>
          <option value="reviews.votes">Votes</option>
        </select>
        <label htmlFor="order">Order reviews...</label>
        <select
          id="order"
          value={order}
          onChange={(event) => {
            setOrder(event.target.value);
            const newSearchParams = new URLSearchParams(searchParams);
            newSearchParams.set('order', event.target.value);
            setSearchParams(newSearchParams);
          }}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </section>
      <section>
        <ReviewCards
          searchParams={searchParams}
          category={category}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      </section>
    </>
  );
};

export default Reviews;
