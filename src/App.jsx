import './App.css';
import './assignment_section/app.css';
import './About/About.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About/About';
import Home from './Component/Home';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import CoursesFilter from './courses/CoursesFilter';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Layout from './assignment_section/layout';
import EnrollLayout from './EnrollLayout';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/courses" element={<CoursesFilter />} />
        <Route path="/about" element={<About />} />
        <Route path="/layout" element={<Layout />} />
        <Route path="/lay" element={<EnrollLayout />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
