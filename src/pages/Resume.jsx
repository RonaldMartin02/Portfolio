import { Link, useLocation } from 'react-router-dom';
// import ResumePDF from '../assets/Resume.pdf';


export default function Resume() {
    return (
        <div>
            <h1>Resume</h1>
            <p>This is the Resume page.</p>
            <p>It is currently under construction.</p>
            <p>Check back soon for updates.</p>
            <p>Thank you for your patience.</p>
            <Link to="/">Go to Home</Link>
        </div>
    );
  }
  