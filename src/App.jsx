import React,{useState} from 'react';
import './App.css';
// import Accordion from './enroll-accordion/Accordion-Sidebar.jsx';

import Accordion from './enroll-accordion/Accordion';
import MainContent from './enroll-accordion/MainContent';
// import StriversA2Z from './enroll-accordion/StriversA2Z';

// import Main from './assignment_section/app';
// import About from './About/About';
// import './About/About.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './Component/Home';
// import Login from './Login/Login';
// import SignUp from './SignUp/SignUp';
// import CoursesFilter from './courses/CoursesFilter'; 
// import Navbar from './Component/Navbar';
// import Footer from './Component/Footer'; 

function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`accordion-item ${isOpen ? 'active' : ''}`}>
      <div className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
        <h2>{title}</h2>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="accordion-item">{children}</div>}
    </div>
  );
}

const App = () => {
  const [strive,setStrive]=useState(0);
  return (
    <>
     <div className="app-container">
      {/* <div className="sidebar"> */}
        {/* <Accordion /> */}
        <div className="accordion">
      <AccordionItem title="Profile">
        <p>Profile content here.</p>
      </AccordionItem>
      <AccordionItem title="Blogs">
        <p>Blogs content here.</p>
      </AccordionItem>
      <AccordionItem title="DSA Sheets">
        <ul>
          <li onClick={()=>setStrive(0)}>Striver's A2Z Sheet</li>
          <li onClick={()=>setStrive(1)}>Striver's SDE Sheet</li>
          <li onClick={()=>setStrive(2)}>Striver's 79 Sheet</li>
          <li onClick={()=>setStrive(3)}>Blind 75 Sheet</li>
        </ul>
      </AccordionItem>
      <AccordionItem title="System Design">
        <ul>
          <li>Striver's DSA Playlist</li>
          <li>SDE Core Sheets</li>
        </ul>
      </AccordionItem>
    </div>
      
      {/* </div> */}
      {/* <div style={{color:'red'}}> */}
        {/* <h1>Hello</h1> */}
      <MainContent  ind={strive}/>
      </div>
           
     
   

      {/* <StriversA2Z/> */}
    
     
    {/* <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/courses" element={<CoursesFilter />} /> 
        <Route path="/courses" element={<CoursesFilter />} /> {/* Route for CoursesFilter */}
        {/* <Route path= "/About" element = {<About/>} />
      </Routes> */}

      {/* <Footer /> */}
    {/* </Router> */}

  </>
  );
};

export default App;
