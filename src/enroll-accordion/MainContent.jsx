import React, { useEffect, useState } from 'react';
import './MainContent.css';
import Fetched from '../../Backend/Fetch-Data/data.json';

function MainContent({ ind }) {
  const [data, setData] = useState(Fetched[ind]);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    setData(Fetched[ind]);
  }, [ind]);

  return (
    <div className="accordions-content" style={{ width: "100%" }}>
      <div className="title">
        {data && (
          <div className='head'>
            <h1>{data.step_title}</h1>
            {data.sub_steps.map((subStep, inx) => (
              <div key={inx} className="sub-step">
                <div className="sub-step-header" onClick={() => setActiveIndex(activeIndex === inx ? -1 : inx)}>
                  <p className="sub-step-title" style={{ height: "50px", width: "100%" , }}>{subStep.sub_step_title}</p>
                  <span className="arrow">
                    {activeIndex === inx ? '▲' : '▼'}
                  </span>
                </div>
                {activeIndex === inx && (
                  <div className="topics">
                    {subStep.topics.map((topic) => (
                      <div key={topic.id} className="topic">
                        <input type="checkbox" className="status" />
                        <span>{topic.question_title}</span>
                        {topic.post_link && (
                          <a href={topic.post_link} className="article-btn" target="_blank" rel="noopener noreferrer">Article</a>
                        )}
                        {topic.yt_link && (
                          <a href={topic.yt_link} className="youtube-btn" target="_blank" rel="noopener noreferrer">YouTube</a>
                        )}
                        {topic.cs_link && (
                          <a href={topic.cs_link} className="practice-btn" target="_blank" rel="noopener noreferrer">Practice</a>
                        )}
                        <button className="note-btn">+</button>
                        <span className={`difficulty ${getDifficultyClass(topic.difficulty)}`}>
                          {getDifficultyLabel(topic.difficulty)}
                        </span>
                        <button className="revision-btn">⭐</button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function getDifficultyClass(difficulty) {
  const difficultyMap = {
    0: 'easy',
    1: 'medium',
    2: 'hard',
  };
  return difficultyMap[difficulty] || 'unknown';
}

function getDifficultyLabel(difficulty) {
  const difficultyMap = {
    0: 'Easy',
    1: 'Medium',
    2: 'Hard',
  };
  return difficultyMap[difficulty] || 'Unknown';
}

export default MainContent;
