import React, { useState } from 'react';
import './app.css';

const Assignment = () => {
    const [assignments, setAssignments] = useState([
        { id: 1, title: 'JavaScript Basics', description: 'Learn the basics of JavaScript', dueDate: '2024-06-10', file: null, fileUrl: null, status: 'Pending' },
        { id: 2, title: 'React Introduction', description: 'Introduction to React', dueDate: '2024-06-12', file: null, fileUrl: null, status: 'Pending' },
    ]);

    const [newAssignment, setNewAssignment] = useState({
        title: '',
        description: '',
        dueDate: '',
        file: null,
        fileUrl: null,
    });

    const [isEditing, setIsEditing] = useState(false);
    const [currentAssignmentId, setCurrentAssignmentId] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewAssignment({
            ...newAssignment,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileUrl = URL.createObjectURL(file);
            setNewAssignment({
                ...newAssignment,
                file: file,
                fileUrl: fileUrl,
            });
            console.log("File uploaded:", file);
            console.log("File URL:", fileUrl);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            setAssignments(assignments.map(assignment =>
                assignment.id === currentAssignmentId ? { ...assignment, ...newAssignment, file: newAssignment.file || assignment.file, fileUrl: newAssignment.fileUrl || assignment.fileUrl } : assignment
            ));
            setIsEditing(false);
            setCurrentAssignmentId(null);
        } else {
            setAssignments([
                ...assignments,
                { ...newAssignment, id: assignments.length + 1, status: 'Pending' },
            ]);
        }
        setNewAssignment({
            title: '',
            description: '',
            dueDate: '',
            file: null,
            fileUrl: null,
        });
        e.target.reset();
    };

    const handleEdit = (assignment) => {
        setIsEditing(true);
        setCurrentAssignmentId(assignment.id);
        setNewAssignment({
            title: assignment.title,
            description: assignment.description,
            dueDate: assignment.dueDate,
            file: null,
            fileUrl: assignment.fileUrl,
        });
    };

    const handleDelete = (id) => {
        setAssignments(assignments.filter(assignment => assignment.id !== id));
    };

    const handleStatusChange = (id, status) => {
        setAssignments(assignments.map(assignment =>
            assignment.id === id ? { ...assignment, status: status } : assignment
        ));
    };

    return (
        <div className="assignment-section">
            <h2>Assignments</h2>
            <ol>
                {assignments.map((assignment) => (
                    <li key={assignment.id} className="assignment-item">
                        <h3>{assignment.title}</h3>
                        <p>{assignment.description}</p>
                        <p>Due Date: {assignment.dueDate}</p>
                        {assignment.fileUrl && <p>File: <img src={assignment.fileUrl} alt={assignment.title} className="assignment-image" /></p>}
                        <p>Status: {assignment.status}</p>
                        <button onClick={() => handleStatusChange(assignment.id, 'Completed')}>Mark as Completed</button>
                        <button onClick={() => handleEdit(assignment)}>Edit</button>
                        <button onClick={() => handleDelete(assignment.id)}>Delete</button>
                    </li>
                ))}
            </ol>

            <form onSubmit={handleSubmit} className="assignment-form">
                <h3>{isEditing ? 'Edit Assignment' : 'Add New Assignment'}</h3>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={newAssignment.title}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={newAssignment.description}
                    onChange={handleChange}
                    required
                />
                <input
                    type="date"
                    name="dueDate"
                    value={newAssignment.dueDate}
                    onChange={handleChange}
                    required
                />
                <input
                    type="file"
                    name="file"
                    onChange={handleFileChange}
                />
                <button type="submit">{isEditing ? 'Update Assignment' : 'Add Assignment'}</button>
            </form>
        </div>
    );
}

export default Assignment;
