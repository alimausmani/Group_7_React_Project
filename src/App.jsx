<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
=======
// // src/App.jsx
// import React from 'react';
// import './App.css';
// import CourseCard from './courses/CourseCard.jsx';

// const courses = [
//   { title: 'React Basics', description: 'Learn the fundamentals of React.', instructor: 'John Doe', image: 'https://via.placeholder.com/150/0000FF/FFFFFF' },
//   { title: 'Advanced React', description: 'Dive deeper into React.', instructor: 'Jane Smith', image: 'https://via.placeholder.com/150/FF0000/FFFFFF' },
//   { title: 'JavaScript Essentials', description: 'Understand the core concepts of JavaScript.', instructor: 'Bob Johnson', image: 'https://via.placeholder.com/150/00FF00/FFFFFF' },
//   { title: 'HTML & CSS', description: 'Build beautiful websites with HTML and CSS.', instructor: 'Alice Davis', image: 'https://via.placeholder.com/150/FFFF00/000000' },
//   { title: 'Node.js Basics', description: 'Get started with server-side JavaScript.', instructor: 'Charlie Brown', image: 'https://via.placeholder.com/150/FF00FF/000000' },
//   { title: 'Python for Beginners', description: 'Learn Python from scratch.', instructor: 'Emily Wilson', image: 'https://via.placeholder.com/150/00FFFF/000000' },
//   { title: 'Data Structures', description: 'Master data structures and algorithms.', instructor: 'Michael Lee', image: 'https://via.placeholder.com/150/000000/FFFFFF' },
//   { title: 'Machine Learning', description: 'An introduction to machine learning concepts.', instructor: 'Sarah Kim', image: 'https://via.placeholder.com/150/FFA500/000000' },
//   { title: 'Web Development', description: 'Learn how to create web applications.', instructor: 'Laura Scott', image: 'https://via.placeholder.com/150/008000/FFFFFF' },
//   { title: 'Mobile Development', description: 'Build mobile apps with React Native.', instructor: 'Mark Evans', image: 'https://via.placeholder.com/150/800080/FFFFFF' },
//   { title: 'Database Management', description: 'Learn how to manage databases.', instructor: 'Sophia Green', image: 'https://via.placeholder.com/150/FFC0CB/000000' },
//   { title: 'DevOps Basics', description: 'Introduction to DevOps practices.', instructor: 'James Martin', image: 'https://via.placeholder.com/150/0000FF/000000' },
//   { title: 'Cloud Computing', description: 'Learn about cloud services.', instructor: 'Kevin White', image: 'https://via.placeholder.com/150/FF0000/000000' },
//   { title: 'Cybersecurity', description: 'Fundamentals of cybersecurity.', instructor: 'Samantha Blue', image: 'https://via.placeholder.com/150/00FF00/000000' },
//   { title: 'Digital Marketing', description: 'Explore digital marketing strategies.', instructor: 'Chris Brown', image: 'https://via.placeholder.com/150/FFFF00/FFFFFF' },
//   { title: 'AI Fundamentals', description: 'Introduction to Artificial Intelligence.', instructor: 'Nancy Drew', image: 'https://via.placeholder.com/150/FF00FF/FFFFFF' },
//   { title: 'UI/UX Design', description: 'Design engaging user experiences.', instructor: 'Paul Green', image: 'https://via.placeholder.com/150/00FFFF/FFFFFF' },
//   { title: 'Software Engineering', description: 'Principles of software engineering.', instructor: 'Linda Black', image: 'https://via.placeholder.com/150/000000/000000' }
// ];

// function App() {
//   return (
//     <div className="App">
//       <h1>Available Courses</h1>
//       <div className="courses-container">
//         {courses.map((course, index) => (
//           <CourseCard
//             key={index}
//             title={course.title}
//             description={course.description}
//             instructor={course.instructor}
//             image={course.image}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;



// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import CourseCard from './courses/CourseCard.jsx';
import Filter from './courses/Filter.jsx';

const coursesData = [
  { title: 'React Basics', description: 'Learn the fundamentals of React.', instructor: 'John Doe', language: 'English', rating: 4.5, price: 100, category: 'Web Development', image: 'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-1.jpg' },
  { title: 'Advanced React', description: 'Dive deeper into React.', instructor: 'Jane Smith', language: 'English', rating: 4.7, price: 150, category: 'Web Development', image: 'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-2.jpg' },
  { title: 'JavaScript Essentials', description: 'Understand the core concepts of JavaScript.', instructor: 'Bob Johnson', language: 'English', rating: 4.3, price: 90, category: 'Programming', image: 'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-3.jpg' },
  // ... add more course objects up to 18
  { title: 'HTML & CSS', description: 'Build beautiful websites with HTML and CSS.', instructor: 'Alice Davis', rating: 4.6, price: 50, category: 'Web Development', language: 'English', image: 'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-4.jpg' },
  { title: 'Node.js Basics', description: 'Get started with server-side JavaScript.', instructor: 'Charlie Brown', rating: 4.4, price: 70, category: 'Programming', language: 'English', image: 'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-5.jpg' },
  { title: 'Python for Beginners', description: 'Learn Python from scratch.', instructor: 'Emily Wilson', rating: 4.7, price: 80, category: 'Programming', language: 'English', image: 'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-6.jpg' },
  { title: 'Data Structures', description: 'Master data structures and algorithms.', instructor: 'Michael Lee', rating: 4.8, price: 120, category: 'Computer Science', language: 'English', image: 'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-7.jpg' },
  { title: 'Machine Learning', description: 'An introduction to machine learning concepts.', instructor: 'Sarah Kim', rating: 4.9, price: 200, category: 'Data Science', language: 'English', image: 'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-22.jpg' },
  { title: 'Web Development', description: 'Learn how to create web applications.', instructor: 'Laura Scott', rating: 4.6, price: 100, category: 'Web Development', language: 'English', image: 'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-9.jpg' },
  { title: 'Mobile Development', description: 'Build mobile apps with React Native.', instructor: 'Mark Evans', rating: 4.5, price: 150, category: 'Programming', language: 'English', image: 'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-23.jpg' },
  { title: 'Database Management', description: 'Learn how to manage databases.', instructor: 'Sophia Green', rating: 4.3, price: 90, category: 'Computer Science', language: 'English', image: 'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-29.jpg' },
  { title: 'DevOps Basics', description: 'Introduction to DevOps practices.', instructor: 'James Martin', rating: 4.6, price: 130, category: 'IT & Software', language: 'English', image: 'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-13.jpg' },
  { title: 'Cloud Computing', description: 'Learn about cloud services.', instructor: 'Kevin White', rating: 4.7, price: 140, category: 'IT & Software', language: 'English', image: 'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-30.jpg' },
  { title: 'DevOps Basics', description: 'Introduction to DevOps practices.', instructor: 'James Martin', rating: 4.6, price: 130, category: 'IT & Software', language: 'English', image: 'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-31.jpg' },
  { title: 'Cloud Computing', description: 'Learn about cloud services.', instructor: 'Kevin White', rating: 4.7, price: 140, category: 'IT & Software', language: 'English', image: 'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-21.jpg' }

];

function App() {
  const [filteredCourses, setFilteredCourses] = useState(coursesData);

  const handleFilterChange = (filters) => {
    let filtered = coursesData;

    if (filters.category) {
      filtered = filtered.filter(course => course.category === filters.category);
    }

    if (filters.price) {
      filtered = filtered.filter(course => course.price <= filters.price);
    }

    if (filters.instructor) {
      filtered = filtered.filter(course => course.instructor === filters.instructor);
    }

    if (filters.language) {
      filtered = filtered.filter(course => course.language === filters.language);
    }

    if (filters.rating) {
      filtered = filtered.filter(course => course.rating >= filters.rating);
    }

    setFilteredCourses(filtered);
  };
>>>>>>> 340c10ea3f1ea119efc6eea57779d2e361e96b01

const App = () => {
  return (
<<<<<<< HEAD
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
  );
};

export default App;
=======
    <div className="App">
      <div className='slider-box'>
        <img src="https://www.rukmanisoftware.com/public/assets/img/online-training.jpg" alt="Courses Banner" className="slider-image" />
        {/* <h1>Courses</h1>
        <p>Home / Courses</p> */}
      </div>
      <h1>Available Courses</h1>
      <div className="main-container">
        <Filter onFilterChange={handleFilterChange} />
        <div className="courses-container">
          {filteredCourses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              description={course.description}
              instructor={course.instructor}
              image={course.image}
              language={course.language}
              rating={course.rating}
              price={course.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

>>>>>>> 340c10ea3f1ea119efc6eea57779d2e361e96b01
