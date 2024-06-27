import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className='dashbord-box'>Dashboard</div>
      <div className='dashbord-image'>
        <img src='https://s39613.pcdn.co/wp-content/uploads/2023/09/flat-lay-photo-of-table.jpg_s1024x1024wisk20cl2mul3qBjSo9jMTnNzoZEa9aENf35m17-kMbqDT_ppw.jpg' alt='assignment'/>
      </div>
      <div className="sidebar-section">
        <ul>
          <li><Link to="/assignments/all">📝 All Assignments</Link></li>
          <li><Link to="/assignments/running">📊 Running Assignments</Link></li>
          <li><Link to="/assignments/completed">✅ Completed Assignments</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
