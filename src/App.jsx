
import './App.css';
import About from './About/About';
import './About/About.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import CoursesFilter from './courses/CoursesFilter'; // Import CoursesFilter component
import Navbar from './Component/Navbar'; // Import Navbar component

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Include Navbar component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/courses" element={<CoursesFilter />} /> {/* Route for CoursesFilter */}
        <Route path= "/About" element = {<About/>} />
      </Routes>
    </Router>
  );
};

export default App;
