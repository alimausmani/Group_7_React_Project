import { BrowserRouter as  Route, Routes } from 'react-router-dom';
import Sidebar from './sidebar';
import TopNav from './topNav';
import AssignmentList from './assignment_list';
import AssignmentDetails from './assignment_details';
import SubmissionSuccess from './submission';
import usePageTitle from './usepage_title';

function Layout() {
  const title = usePageTitle();

  return (
    <div className="layout" id='layout'>
      <Sidebar />
      <div className="mains">
        <TopNav title={title} />
        <div className="content">
          <Routes>
            <Route path="/assignments/all" element={<AssignmentList />} />
            <Route path="/assignments/running" element={<AssignmentList status="Running" />} />
            <Route path="/assignments/completed" element={<AssignmentList status="Completed" />} />
            <Route path="/assignment/:id" element={<AssignmentDetailsWrapper />} />
            <Route path="/profile" element={<h1>Profile</h1>} />
            <Route path="/submission-success" element={<SubmissionSuccess />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}


function AssignmentDetailsWrapper() {
  return (
    <div className="details-wrapper">
      <div className="assignment-details-section">
        <AssignmentDetails />
      </div>
    </div>
  );
}

export default Layout;
