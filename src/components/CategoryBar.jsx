import { useState, useEffect } from 'react';
import { getCategories } from '../utils';
import { Link } from 'react-router-dom';

const CategoryBar = ({
  categories,
  setCategories,
  setCategory,
  searchParams,
  setSearchParams,
}) => {
  const [categoriesLoading, setCategoriesLoading] = useState(true);

  useEffect(() => {
    setCategoriesLoading(true);
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
      setCategoriesLoading(false);
    });
  }, [setCategories]);

  if (categoriesLoading) {
    return <p>Categories loading, please wait...</p>;
  }

  return (
    <>
      <h2>Categories</h2>
      <section>
        <ul className="categoryBar">
          <Link to={`/reviews?category=`}>
            <button
              onClick={() => {
                setCategory('');
                const newSearchParams = new URLSearchParams(searchParams);
                newSearchParams.set('category', '');
                setSearchParams(newSearchParams);
              }}
            >
              All categories
            </button>
          </Link>
          {categories.map((category) => {
            return (
              <li key={category.slug}>
                <Link to={`/reviews?category=${category.slug}`}>
                  <button
                    onClick={() => {
                      setCategory(category.slug);
                      const newSearchParams = new URLSearchParams(searchParams);
                      newSearchParams.set('category', category.slug);
                      setSearchParams(newSearchParams);
                    }}
                  >
                    {category.slug}
                  </button>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default CategoryBar;
