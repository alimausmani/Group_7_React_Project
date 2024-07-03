import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function SubmissionSuccess() {
  const location = useLocation();
  const { submission, score } = location.state || {};

  if (!submission) {
    return <div>No submission data found</div>;
  }
  

  return (
    <div className="submission-success">
      <h1 className='sucess'>Your submission is successful!</h1>
      <div className="submission-details">
        <h2>You scored: {score} out of 100</h2>
        <p>Folder: {submission.folderName}</p>
        <p>Submitted on: {submission.time}</p>
      </div>
      <Link to="/assignments/all">Back to Assignments</Link>
    </div>
  );
}

export default SubmissionSuccess;
