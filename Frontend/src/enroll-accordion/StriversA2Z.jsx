import React, { useState } from 'react';
import './StriversA2Z.css';

function StriversA2ZContent({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`strivers-a2z-content-item ${isOpen ? 'active' : ''}`}>
      <div className="strivers-a2z-content-title" onClick={() => setIsOpen(!isOpen)}>
        <h2>{title}</h2>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="strivers-a2z-content-body">{children}</div>}
    </div>
  );
}


function StriversA2Z() {
  return (
    <div className="strivers-a2z">
      <StriversA2ZContent title="Key Highlights">
        <p>Your key highlights content here.</p>
      </StriversA2ZContent>
      <StriversA2ZContent title="Note">
        <p>Your note content here.</p>
      </StriversA2ZContent>
      <StriversA2ZContent title="Your Progress: 0/455">
        <p>0% complete</p>
      </StriversA2ZContent>
      <StriversA2ZContent title="Show Revision">
        <p>Revision content here.</p>
      </StriversA2ZContent>
      <StriversA2ZContent title="Step 1 : Learn the basics (0 / 31)">
        <p>Step 1 content here.</p>
      </StriversA2ZContent>
      <StriversA2ZContent title="Step 2 : Learn Important Sorting Techniques (0 / 7)">
        <p>Step 2 content here.</p>
      </StriversA2ZContent>
      <StriversA2ZContent title="Step 3 : Solve Problems on Arrays [Easy -> Medium -> Hard] (0 / 40)">
        <p>Step 3 content here.</p>
      </StriversA2ZContent>
      <StriversA2ZContent title="Step 4 : Binary Search [1D, 2D Arrays, Search Space] (0 / 32)">
        <p>Step 4 content here.</p>
      </StriversA2ZContent>
      <StriversA2ZContent title="Step 5 : Strings [Basic and Medium] (0 / 15)">
        <p>Step 5 content here.</p>
      </StriversA2ZContent>
      <StriversA2ZContent title="Step 6 : Learn LinkedList [Single LL, Double LL, Medium, Hard Problems] (0 / 31)">
        <p>Step 6 content here.</p>
      </StriversA2ZContent>
      <StriversA2ZContent title="Step 7 : Recursion [PatternWise] (0 / 25)">
        <p>Step 7 content here.</p>
      </StriversA2ZContent>
      <StriversA2ZContent title="Step 8 : Bit Manipulation [Concepts & Problems] (0 / 18)">
        <p>Step 8 content here.</p>
      </StriversA2ZContent>
    </div>
  );
}

export default StriversA2Z;
