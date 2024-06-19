import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import CoursesFilter from './courses/CoursesFilter'; 
import Navbar from './Component/Navbar'; 

const App = () => {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/courses" element={<CoursesFilter />} /> 
      </Routes>
    </Router>
  );
};

export default App;
