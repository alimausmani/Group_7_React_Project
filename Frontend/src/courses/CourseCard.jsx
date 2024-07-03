import './CourseCard.css';
import { useNavigate } from 'react-router-dom';

function CourseCard({ title, description, instructor, image, language, rating, price }) {
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate('/lay');  // Navigate to LayoutComponent on enroll button click
  };

  return (
    <div className="course-card">
      <img src={image} alt={title} className="course-image" />
      <h2>{title}</h2>
      <p style={{ color: "black" }}>{description}</p>
      <p><strong>Instructor:</strong> {instructor}</p>
      <p><strong>Language:</strong> {language}</p>
      <p><strong>Rating:</strong> {rating}</p>
      <p><strong>Price:</strong> ${price}</p>
      <button className='bttn' onClick={handleEnroll}>Enroll</button>
    </div>
  );
}

export default CourseCard;
  