import { useState } from 'react';


import "./LayoutComponent.css"

import MainContent from './enroll-accordion/MainContent';

function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`accordion-item ${isOpen ? 'active' : ''}`}>
      <div className="accordion-title "  onClick={() => setIsOpen(!isOpen)}>
        <h2>{title}</h2>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
}

const LayoutComponent = () => {
  const [strive, setStrive] = useState(0);

  return (
      <div className="app-container">
        <div className="accordion">
          <AccordionItem title="Profile">
            <p>Profile content here.</p>
          </AccordionItem>
          <AccordionItem title="Blogs">
            <p>Blogs content here.</p>
          </AccordionItem>
          <AccordionItem title="DSA Sheets">
            <ul>
              <li onClick={() => setStrive(0)}>Striver's A2Z Sheet</li>
              <li onClick={() => setStrive(1)}>Striver's SDE Sheet</li>
              <li onClick={() => setStrive(2)}>Striver's 79 Sheet</li>
              <li onClick={() => setStrive(3)}>Blind 75 Sheet</li>
            </ul>
          </AccordionItem>
          <AccordionItem title="System Design">
            <ul>
              <li>Striver's DSA Playlist</li>
              <li>SDE Core Sheets</li>
            </ul>
          </AccordionItem>
        </div>
        <MainContent ind={strive} />
      </div>
  );
};

export default LayoutComponent;
