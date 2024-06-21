import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AssignmentSubmit from './assignment_submit'; 

const assignments = [
  { id: 1, title: "Food delivery app wireframe", course: "Interaction Design Course", status: "Running", dueDate: "Sep 30, 2023" },
  { id: 2, title: "Dog Walking website homepage design", course: "Interaction Design Course", status: "Completed", dueDate: "Sep 15, 2023" },
  { id: 3, title: "Travel booking app UI design", course: "Interaction Design Course", status: "Expired", dueDate: "Sep 10, 2023" },
  { id: 4, title: "Food delivery app user flow design", course: "Interaction Design Course", status: "Running", dueDate: "Oct 10, 2023" },
  { id: 5, title: "Dog Walking app user flow design", course: "Interaction Design Course", status: "Running", dueDate: "Oct 20, 2023" },
];

function AssignmentList({ status }) {
  const filteredAssignments = status ? assignments.filter(assignment => assignment.status === status) : assignments;
  const [submissions, setSubmissions] = useState({});

  const handleSubmission = (assignmentId, submission) => {
    setSubmissions(prevSubmissions => ({
      ...prevSubmissions,
      [assignmentId]: [...(prevSubmissions[assignmentId] || []), submission]
    }));
  };

  return (
    <div className="assignment-section">
      <div className="assignment-list">
        {filteredAssignments.map((assignment) => (
          <div key={assignment.id} className="assignment-item">
            <h3>{assignment.title}</h3>
            <p>{assignment.course}</p>
            <p>Status: {assignment.status}</p>
            <p>Due Date: {assignment.dueDate}</p>
            <Link to={`/assignment/${assignment.id}`}>View Details</Link>
            <AssignmentSubmit onSubmit={(submission) => handleSubmission(assignment.id, submission)} />
            <div className="submissions">
              {submissions[assignment.id]?.map((submission, index) => (
                <div key={index} className="submission-item">
                  {submission.preview && <img src={submission.preview} alt={`Submission ${index}`} style={{ maxWidth: '100%' }} />}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AssignmentList;
