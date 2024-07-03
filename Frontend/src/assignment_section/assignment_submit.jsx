import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AssignmentSubmit({ onSubmit }) {
  const [folderName, setFolderName] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      const fullPath = event.target.files[0].webkitRelativePath;
      const folder = fullPath.split('/')[0];
      setFolderName(folder);
    }
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    if (folderName) {
      const submission = {
        folderName,
        time: new Date().toLocaleString(),
      };
      onSubmit(submission);

      const score = Math.floor(Math.random() * 100);

      navigate('/submission-success', { state: { submission, score } });
    }
  };

  return (
    <>
        <form onSubmit={handleSubmit} className="submt">
        <input
            id="chose_file"
            type="file"
            onChange={handleFileChange}
            className="custom-file-input"
            webkitdirectory="true"
            directory=""
            multiple
        />
        <div className='submit'>
            <button type="submit">Submit</button>
        </div>
    </form>
    </>
    
  );
}

export default AssignmentSubmit;
