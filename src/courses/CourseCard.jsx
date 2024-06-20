
// CourseCard.jsx
import './CourseCard.css';

function CourseCard({ title, description, instructor, image, language, rating, price, onEnroll }) {
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
        <button className='bttn' onClick={onEnroll}>Enroll</button>
      </div>
<<<<<<< HEAD
=======
    </>
>>>>>>> a1c76b371bae25c1aa5ae2fcf6c0d393c83b7006
  );
}

export default CourseCard;
