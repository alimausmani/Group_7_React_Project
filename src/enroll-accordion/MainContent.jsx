// src/components/MainContent.js
import React, { useEffect, useState } from 'react';
import './MainContent.css';
import Fetched from "../../Backend/Fetch-Data/data.json";

function MainContent({ind}) {
    const [index, setIndex] = useState(-1);
    const [mainIndex, setMainIndex] = useState(-1);
    const [y,setY]=useState(Fetched[ind]);
    const [act,setAct]=useState("inactive")
    console.log(y);
    useEffect(() => {
        setY(Fetched[ind])
    },[ind])


    return (
        
        <div className="accordions-content">
            <div className='title'>
                
                {/* {Fetched.map((y, main) => ( */}


                    <div>
                        <h1
                            onClick={() => setAct('active')}
                            
                        >{y.step_title}</h1>
                        {act == "active"
                            && y.sub_steps.map((x, inx) => (
                                <p
                                    style={{ marginLeft: "20px" }}
                                    className={act == "active" ? "active" : "inactive"}
                                    onClick={() => setIndex(inx)}
                                >
                                    {x.sub_step_title}
                                    {index == inx &&
                                        // x.topics.map((z, i) => (
                                        x.topics.map((topic) => (
                                            <div key={topic.id} className="table-row">
                                                <input type="checkbox" className="status" />
                                                <span>{topic.question_title}</span>
                                                <span>{topic.post_link && <a href={topic.post_link} className="article-btn" target="_blank" rel="noopener noreferrer">Article</a>}</span>
                                                <span>{topic.yt_link && <a href={topic.yt_link} className="youtube-btn" target="_blank" rel="noopener noreferrer">YouTube</a>}</span>
                                                <span>{topic.cs_link && <a href={topic.cs_link} className="practice-btn" target="_blank" rel="noopener noreferrer">Practice</a>}</span>
                                                <span><button className="note-btn">+</button></span>
                                                <span className={`difficulty ${getDifficultyClass(topic.difficulty)}`}>{getDifficultyLabel(topic.difficulty)}</span>
                                                <span><button className="revision-btn">⭐</button></span>
                                            </div>
                                        ))}
                                </p>
                            ))
                          
                        }
                    </div>
                
                {/* ))} */}
        </div>





            {/* <h2>Step 1: Learn the basics</h2>
      <h3>Lec 1: Things to Know in C++/Java/Python or any language</h3>
      <div className="table">
        <div className="table-header">
          <span>Status</span>
          <span>Problem</span>
          <span>Article</span>
          <span>YouTube</span>
          <span>Practice</span>
          <span>Note</span>
          <span>Difficulty</span>
          <span>Revision</span> */}
        </div>

        //     ))}
        //   </div>
        // </div>
    );
}

// Utility functions for handling difficulty
function getDifficultyClass(difficulty) {
    const difficultyMap = {
        0: 'easy',
        1: 'medium',
        2: 'hard'
    };
    return difficultyMap[difficulty] || 'unknown';
}

function getDifficultyLabel(difficulty) {
    const difficultyMap = {
        0: 'Easy',
        1: 'Medium',
        2: 'Hard'
    };
    return difficultyMap[difficulty] || 'Unknown';
}

export default MainContent;
