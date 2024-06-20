
// // src/filters/Filter.jsx
// import  { useState } from 'react';
// import './Filter.css';

// function Filter({ onFilterChange }) {
//   const [category, setCategory] = useState('');
//   const [price, setPrice] = useState('');
//   const [instructor, setInstructor] = useState('');
//   const [language, setLanguage] = useState('');
//   const [rating, setRating] = useState('');

//   const handleFilter = () => {
//     onFilterChange({ category, price, instructor, language, rating });
//   };

//   return (
//     <div className="filter-container">
//       <h3>Filter Courses</h3>
//       <div className="filter-group">
//         <label>Category</label>
//         <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
//       </div>
//       <div className="filter-group">
//         <label>Max Price</label>
//         <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
//       </div>
//       <div className="filter-group">
//         <label>Instructor</label>
//         <input type="text" value={instructor} onChange={(e) => setInstructor(e.target.value)} />
//       </div>
//       <div className="filter-group">
//         <label>Language</label>
//         <input type="text" value={language} onChange={(e) => setLanguage(e.target.value)} />
//       </div>
//       <div className="filter-group">
//         <label>Min Rating</label>
//         <input type="number" step="0.1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} />
//       </div>
//       <button onClick={handleFilter}>Apply Filters</button>
//     </div>
//   );
// }

// export default Filter;



// Filter.jsx
// import React, { useState } from 'react';
// import './Filter.css';

// function Filter({ onFilterChange }) {
//   const [category, setCategory] = useState('');
//   const [price, setPrice] = useState('');
//   const [instructor, setInstructor] = useState('');
//   const [language, setLanguage] = useState('');
//   const [rating, setRating] = useState('');

//   const handleApplyFilter = () => {
//     const filters = {
//       category: category.trim(),
//       price: parseFloat(price),
//       instructor: instructor.trim(),
//       language: language.trim(),
//       rating: parseFloat(rating)
//     };
//     onFilterChange(filters);
//   };

//   return (
//     <div className="filter-container">
//       <h3>Filter Courses</h3>
//       <div className="filter-group">
//         <label>Category</label>
//         <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
//       </div>
//       <div className="filter-group">
//         <label>Max Price</label>
//         <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
//       </div>
//       <div className="filter-group">
//         <label>Instructor</label>
//         <input type="text" value={instructor} onChange={(e) => setInstructor(e.target.value)} />
//       </div>
//       <div className="filter-group">
//         <label>Language</label>
//         <input type="text" value={language} onChange={(e) => setLanguage(e.target.value)} />
//       </div>
//       <div className="filter-group">
//         <label>Min Rating</label>
//         <input type="number" step="0.1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} />
//       </div>
//       <button onClick={onFilterChange}>Apply Filters</button>
//     </div>
//   );
// }

// export default Filter;



// src/filters/Filter.jsx
import React, { useState, useEffect } from 'react';
import './Filter.css';

function Filter({ onFilterChange }) {
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [instructor, setInstructor] = useState('');
  const [language, setLanguage] = useState('');
  const [rating, setRating] = useState('');

  // useEffect(() => {
  //   handleFilterChange();
  // }, [category, price, instructor, language, rating]);

  const handleFilterChange = () => {
    onFilterChange({
      category,
      price: price !== '' ? parseFloat(price) : '',
      instructor,
      language,
      rating: rating !== '' ? parseFloat(rating) : ''
    });
  };

  return (
    <div className="filter-container">
      <h3>Filter Courses</h3>
      <div className="filter-group">
        <label>Category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All</option>
          <option value="Web Development">Web Development</option>
          <option value="Programming">Programming</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Data Science">Data Science</option>
          <option value="IT & Software">IT & Software</option>
        </select>
      </div>
      <div className="filter-group">
        <label>Max Price</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter max price"/>
      </div>
      <div className="filter-group">
        <label>Instructor</label>
        <input type="text" value={instructor} onChange={(e) => setInstructor(e.target.value)} placeholder="Enter instructor name"/>
      </div>
      <div className="filter-group">
        <label>Language</label>
        <input type="text" value={language} onChange={(e) => setLanguage(e.target.value)} placeholder="Enter language"/>
      </div>
      <div className="filter-group">
        <label>Min Rating</label>
        <input type="number" step="0.1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} placeholder="Enter min rating"/>
      </div>
      <button className='button' onClick={handleFilterChange}>Apply Filter</button>
    </div>
  );
}

export default Filter;
