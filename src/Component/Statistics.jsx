import { useState, useEffect } from 'react';
import './statistics.css';

const Statistics = () => {
  const [students, setStudents] = useState(0);
  const [instructors, setInstructors] = useState(0);
  const [courses, setCourses] = useState(0);
  const [earnings, setEarnings] = useState(0);

  const incrementValue = (target, setValue) => {
    let start = 0;
    const end = target;
    const duration = 3000; 
    const incrementTime = 100; 

    const increment = Math.ceil(end / (duration / incrementTime));
    
    const timer = setInterval(() => {
      start += increment;
      if (start > end) {
        start = end;
        clearInterval(timer);
      }
      setValue(start);
    }, incrementTime);
  };

  useEffect(() => {
    incrementValue(24163, setStudents);
    incrementValue(1455, setInstructors);
    incrementValue(19925, setCourses);
    incrementValue(119985, setEarnings);
  }, []);

  return (
    <div className="statistics">
      <div className="stat-item">
        <div className="icon">&#128100;</div>
        <div className="number">{students}</div>
        <div className="label">STUDENTS</div>
      </div>
      <div className="stat-item">
        <div className="icon">&#9816;</div>
        <div className="number">{instructors}</div>
        <div className="label">INSTRUCTORS</div>
      </div>
      <div className="stat-item">
        <div className="icon">&#128204;</div>
        <div className="number">{courses}</div>
        <div className="label">COURSES</div>
      </div>
      <div className="stat-item">
        <div className="icon">&#127942;</div>
        <div className="number">{earnings}</div>
        <div className="label">EARNINGS</div>
      </div>
    </div>
  );
};

export default Statistics;
