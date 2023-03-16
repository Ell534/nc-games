import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Reviews from './components/Reviews';
import SingleReview from './components/SingleReview';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState('grumpy19');
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Home categories={categories} setCategories={setCategories} />
          }
        />
        <Route
          path="/reviews"
          element={
            <Reviews
              categories={categories}
              setCategories={setCategories}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
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
