import { useState, useEffect } from 'react';
import { getCategories } from '../utils';

const CategoryBar = ({ categories, setCategories, setCategory }) => {
  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
    });
  }, [setCategories]);

  return (
    <>
      <h2>Categories</h2>
      <section>
        <ul className='categoryBar'>
          {categories.map((category) => {
            return (
              <li key={category.slug}>
                <button
                  onClick={() => {
                    setCategory(category.slug);
                  }}
                >
                  {category.slug}
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default CategoryBar;
