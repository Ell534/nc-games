import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Reviews from './components/Reviews';
import SingleReview from './components/SingleReview';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function App() {
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const [user, setUser] = useState('grumpy19');
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              categories={categories}
              setCategories={setCategories}
              setCategory={setCategory}
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />
          }
        />
        <Route
          path="/reviews"
          element={
            <Reviews
              category={category}
              setCategory={setCategory}
              categories={categories}
              setCategories={setCategories}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />
          }
        />
        <Route
          path="/reviews/:review_id"
          element={
            <SingleReview
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              categories={categories}
              setCategories={setCategories}
              user={user}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
