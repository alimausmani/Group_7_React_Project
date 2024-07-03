import { useLocation } from 'react-router-dom';

function usePageTitle() {
  const location = useLocation();
  let title = 'All Assignments';

  if (location.pathname.includes('/assignments/running')) {
    title = 'Running Assignments';
  } else if (location.pathname.includes('/assignments/completed')) {
    title = 'Completed Assignments';
  } else if (location.pathname.includes('/assignment/')) {
    title = 'Assignment Details';
  } else if (location.pathname.includes('/profile')) {
    title = 'Profile';
  } else if (location.pathname.includes('/submission-success')) {
    title = 'Submission Success';
  }

  return title;
}

export default usePageTitle;
