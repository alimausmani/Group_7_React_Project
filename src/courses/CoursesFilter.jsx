import { useState } from 'react';
import './Courses.css';
import CourseCard from '../courses/CourseCard.jsx';
import Filter from './Filter.jsx'; // Assuming you have a Filter component

const coursesData = [
  { title: 'React Basics', description: 'Learn the fundamentals of React.', instructor: 'John Doe', language: 'English', rating: 4.5, price: 100, category: 'Web Development', image: 'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-1.jpg', enrollNow: "https://react.dev/learn" },
  { title: 'Advanced React', description: 'Dive deeper into React.', instructor: 'Jane Smith', language: 'English', rating: 4.7, price: 150, category: 'Web Development', image: 'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-2.jpg', enrollNow: "https://www.advanced-react.com/" },
  { title: 'JavaScript Essentials', description: 'Understand the core concepts of JavaScript.', instructor: 'Bob Johnson', language: 'English', rating: 4.3, price: 90, category: 'Programming', image: 'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-3.jpg', enrollNow: "https://skillsforall.com/course/javascript-essentials-1?courseLang=en-US" },
  // ... add more course objects up to 18
  { title: 'HTML & CSS', description: 'Build beautiful websites with HTML and CSS.', instructor: 'Alice Davis', rating: 4.6, price: 50, category: 'Web Development', language: 'English', image: 'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-4.jpg', enrollNow: "https://google.github.io/styleguide/htmlcssguide.html" },
  { title: 'Node.js Basics', description: 'Get started with server-side JavaScript.', instructor: 'Charlie Brown', rating: 4.4, price: 70, category: 'Programming', language: 'English', image: 'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-5.jpg', enrollNow: "https://nodejs.org/docs/latest/api/" },
  { title: 'Python for Beginners', description: 'Learn Python from scratch.', instructor: 'Emily Wilson', rating: 4.7, price: 80, category: 'Programming', language: 'English', image: 'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-6.jpg', enrollNow: "https://www.programiz.com/python-programming" },
  { title: 'Data Structures', description: 'Master data structures and algorithms.', instructor: 'Michael Lee', rating: 4.8, price: 120, category: 'Computer Science', language: 'English', image: 'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-7.jpg', enrollNow: "https://www.javatpoint.com/data-structure-tutorial" },
  { title: 'Machine Learning', description: 'An introduction to machine learning concepts.', instructor: 'Sarah Kim', rating: 4.9, price: 200, category: 'Data Science', language: 'English', image: 'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-22.jpg', enrollNow: "https://www.ibm.com/topics/machine-learning" },
  { title: 'Web Development', description: 'Learn how to create web applications.', instructor: 'Laura Scott', rating: 4.6, price: 100, category: 'Web Development', language: 'English', image: 'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-9.jpg', enrollNow: "https://developers.google.com/focus/web-development" },
  { title: 'Mobile Development', description: 'Build mobile apps with React Native.', instructor: 'Mark Evans', rating: 4.5, price: 150, category: 'Programming', language: 'English', image: 'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-23.jpg', enrollNow: "https://www.servicenow.com/workflows/creator-workflows/what-is-mobile-development.html" },
  { title: 'Database Management', description: 'Learn how to manage databases.', instructor: 'Sophia Green', rating: 4.3, price: 90, category: 'Computer Science', language: 'English', image: 'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-29.jpg', enrollNow: "https://www.spiceworks.com/tech/cloud/articles/database-management-systems-dbms/" },
  { title: 'DevOps Basics', description: 'Introduction to DevOps practices.', instructor: 'James Martin', rating: 4.6, price: 130, category: 'IT & Software', language: 'English', image: 'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-13.jpg', enrollNow: "https://www.geeksforgeeks.org/devops-tutorial/?ref=lbp" },
  { title: 'Cloud Computing', description: 'Learn about cloud services.', instructor: 'Kevin White', rating: 4.7, price: 140, category: 'IT & Software', language: 'English', image: 'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-30.jpg', enrollNow: "https://cic.gsa.gov/basics/cloud-basics" },
  { title: 'DevOps Basics', description: 'Introduction to DevOps practices.', instructor: 'James Martin', rating: 4.6, price: 130, category: 'IT & Software', language: 'English', image: 'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-31.jpg', enrollNow: "https://www.geeksforgeeks.org/devops-tutorial/?ref=lbp" },
  { title: 'Cloud Computing', description: 'Learn about cloud services.', instructor: 'Kevin White', rating: 4.7, price: 140, category: 'IT & Software', language: 'English', image: 'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-21.jpg', enrollNow: "https://cic.gsa.gov/basics/cloud-basics" }
];

function CoursesFilter() {
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

  const handleEnroll = (courseLink) => {
    window.open(courseLink, '_blank');
  };

  return (
    <div className="App" id='filter'>
      <div className='slider-box'>
        <img src="https://www.rukmanisoftware.com/public/assets/img/online-training.jpg" alt="Courses Banner" className="slider-image" />
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
              onEnroll={() => handleEnroll(course.enrollNow)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoursesFilter;
