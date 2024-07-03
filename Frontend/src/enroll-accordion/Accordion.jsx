import React from 'react';
import AccordionItem from './AccordionItem';

function Accordion({ setStrive }) {
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
  );
}

export default Accordion;
