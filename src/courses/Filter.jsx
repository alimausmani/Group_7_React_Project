
// src/filters/Filter.jsx
import React, { useState } from 'react';
import './Filter.css';

function Filter({ onFilterChange }) {
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [instructor, setInstructor] = useState('');
  const [language, setLanguage] = useState('');
  const [rating, setRating] = useState('');

  const handleFilter = () => {
    onFilterChange({ category, price, instructor, language, rating });
  };

  return (
    <div className="filter-container">
      <h3>Filter Courses</h3>
      <div className="filter-group">
        <label>Category</label>
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      </div>
      <div className="filter-group">
        <label>Max Price</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <div className="filter-group">
        <label>Instructor</label>
        <input type="text" value={instructor} onChange={(e) => setInstructor(e.target.value)} />
      </div>
      <div className="filter-group">
        <label>Language</label>
        <input type="text" value={language} onChange={(e) => setLanguage(e.target.value)} />
      </div>
      <div className="filter-group">
        <label>Min Rating</label>
        <input type="number" step="0.1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} />
      </div>
      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );
}

export default Filter;
