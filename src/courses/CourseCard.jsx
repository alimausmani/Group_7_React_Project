
import React from 'react';
import './CourseCard.css';
function CourseCard({ title, description, instructor, image, language, rating, price }) {
  return (
    <>
      <div className="course-card">
        <img src={image} alt={title} className="course-image" />
        <h2>{title}</h2>
        <p style={{ color: "black" }}>{description}</p>
        <p><strong>Instructor:</strong> {instructor}</p>
        <p><strong>Language:</strong> {language}</p>
        <p><strong>Rating:</strong> {rating}</p>
        <p><strong>Price:</strong> ${price}</p>
      </div>
      </> 
  );
}

export default CourseCard;
