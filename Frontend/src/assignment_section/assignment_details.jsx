
import { useParams, Link } from 'react-router-dom';

const assignments = [
  { id: 1, title: "Food delivery app wireframe", course: "Interaction Design Course", status: "Running", dueDate: "Sep 30, 2023", details: "Detailed description of the assignment" },
  { id: 2, title: "Dog Walking website homepage design", course: "Interaction Design Course", status: "Completed", dueDate: "Sep 15, 2023", details: "Detailed description of the assignment" },
  { id: 3, title: "Travel booking app UI design", course: "Interaction Design Course", status: "Expired", dueDate: "Sep 10, 2023", details: "Detailed description of the assignment" },
  { id: 4, title: "Food delivery app user flow design", course: "Interaction Design Course", status: "Running", dueDate: "Oct 10, 2023", details: "Detailed description of the assignment" },
  { id: 5, title: "Dog Walking app user flow design", course: "Interaction Design Course", status: "Running", dueDate: "Oct 20, 2023", details: "Detailed description of the assignment" },
];


function AssignmentDetails() {
  const { id } = useParams();
  const assignment = assignments.find(assignment => assignment.id === parseInt(id));

  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  return (
    <div className="assignment-details">
      <h1 className='assignment_detail'>{assignment.title}</h1>
      <p>{assignment.course}</p>
      <p>Status: {assignment.status}</p>
      <p>Due Date: {assignment.dueDate}</p>
      <p>{assignment.details}</p>
      <Link to="/assignments/all">Back to Assignments</Link>
    </div>
  );
}

export default AssignmentDetails;
