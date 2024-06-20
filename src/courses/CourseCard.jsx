// CourseCard.jsx
import './CourseCard.css';

function CourseCard({ title, description, instructor, image, language, rating, price, onEnroll }) {
  return (
    <div className="course-card">
      <img src={image} alt={title} className="course-image" />
      <div className="course-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <p><strong>Instructor:</strong> {instructor}</p>
        <p><strong>Language:</strong> {language}</p>
        <p><strong>Rating:</strong> {rating}</p>
        <p><strong>Price:</strong> ${price}</p>
        <button className='bttn' onClick={onEnroll}>Enroll</button>
      </div>
    </div>
  );
}

export default CourseCard;
