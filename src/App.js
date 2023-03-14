import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Reviews from './components/Reviews';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [categories, setCategories] = useState([]);
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home categories={categories} setCategories={setCategories} />} />
        <Route path="/reviews" element={<Reviews categories={categories} setCategories={setCategories} />} />
      </Routes>
    </div>
  );
}

export default App;
