import Fetched from "../../Backend/Fetch-Data/data.json";
console.log(Fetched);

// // const Accordion =()=>{
// //     return(
// //         <>
// //         <div className="accordian">
// //             <h1>Hello</h1>
// //             {Fetched.map((item)=>(
// //                 <>
// //                 <p>{item.step_title}</p>
// //                 </>
// //             ))}
// //         </div>
// //         </>
// //     )
// // }

// // export default Accordion;

// // src/components/Sidebar.js

// // import React from 'react';
// // import './Accordion.css';

// // function Accordion() {
// //   return (
// //     <div className="sidebar">
// //       <h2>Profile</h2>
// //       <h2>Blogs</h2>
// //       <h2>DSA Sheets</h2>
// //       <ul>
// //         <li>Striver's A2Z Sheet</li>
// //         <li>Striver's SDE Sheet</li>
// //         <li>Striver's 79 Sheet</li>
// //         <li>Blind 75 Sheet</li>
// //       </ul>
// //       <h2>System Design</h2>
// //       <ul>
// //         <li>Striver's DSA Playlist</li>
// //         <li>SDE Core Sheets</li>
// //       </ul>
// //     </div>
// //   );
// // }

// // export default Accordion;



// import React, { useState } from 'react';
// import './Accordion.css';

// function AccordionItem({ title, children }) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className={`accordion-item ${isOpen ? 'active' : ''}`}>
//       <div className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
//         <h2>{title}</h2>
//         <span>{isOpen ? '-' : '+'}</span>
//       </div>
//       <div className="accordion-content">{children}</div>
//     </div>
//   );
// }

// function Accordion() {
//   return (
//     <div className="accordion">
//       <AccordionItem title="Profile">
//         <p>Profile content here.</p>
//       </AccordionItem>
//       <AccordionItem title="Blogs">
//         <p>Blogs content here.</p>
//       </AccordionItem>
//       <AccordionItem title="DSA Sheets">
//         <ul>
//           <li>Striver's A2Z Sheet</li>
//           <li>Striver's SDE Sheet</li>
//           <li>Striver's 79 Sheet</li>
//           <li>Blind 75 Sheet</li>
//         </ul>
//       </AccordionItem>
//       <AccordionItem title="System Design">
//         <ul>
//           <li>Striver's DSA Playlist</li>
//           <li>SDE Core Sheets</li>
//         </ul>
//       </AccordionItem>
//     </div>
//   );
// }

// export default Accordion;



// my


import React, { useState } from 'react';
import './Accordion.css';

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

function Accordion() {
  return (
    <div className="accordion">
      <AccordionItem title="Profile">
        <p>Profile content here.</p>
      </AccordionItem>
      <AccordionItem title="Blogs">
        <p>Blogs content here.</p>
      </AccordionItem>
      <AccordionItem title="DSA Sheets">
        <ul>
          <li>Striver's A2Z Sheet</li>
          <li>Striver's SDE Sheet</li>
          <li>Striver's 79 Sheet</li>
          <li>Blind 75 Sheet</li>
        </ul>
      </AccordionItem>
      <AccordionItem title="System Design">
        <ul>
          <li>Striver's DSA Playlist</li>
          <li>SDE Core Sheets</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

export default Accordion;




