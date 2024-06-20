import React from 'react';
import './App.css';
import Main from './assignment_section/app';
import About from './About/About';
import './About/About.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import CoursesFilter from './courses/CoursesFilter'; 
import Navbar from './Component/Navbar';
import Footer from './Component/Footer'; 

const App = () => {
  return (
    <>
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/courses" element={<CoursesFilter />} /> 
        <Route path="/courses" element={<CoursesFilter />} /> {/* Route for CoursesFilter */}
        <Route path= "/About" element = {<About/>} />
      </Routes>
      <Footer />
    </Router>
  </>
  );
};

export default App;
