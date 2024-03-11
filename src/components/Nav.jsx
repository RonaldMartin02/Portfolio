import { Link, useLocation } from 'react-router-dom';
export default function Nav() {
    return (
      <nav className='nav'>
       <div className='nav_Link'>
            <Link to="/">About</Link>
       </div>
       <div className='nav_Link'>
            <Link to="/Resume">Resume</Link>
       </div>
       <div className='nav_Link'>
            <Link to="/Portfolio">Portfolio</Link>
       </div>
       <div className='nav_Link'>
        <Link to="/Contact">Contact</Link>
       </div>
     </nav>
    );
  }
  