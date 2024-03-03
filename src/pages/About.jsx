import { Link, useLocation } from 'react-router-dom';

export default function About() {
  const currentPage = useLocation().pathname;

  return (
    <div>
      <h1>About</h1>
      <p>This is the About page.</p>
      <p>Current page: {currentPage}</p>
      <Link to="/">Go to Home</Link>
      
    </div>
  );
}