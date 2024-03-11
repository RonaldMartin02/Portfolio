import LinkedIn from '../assets/img/LinkedIn.png';
import GitHub from '../assets/img/GitHub.png';

export default function Footer() {
    return (
      <footer>
        <a href="https://www.linkedin.com/in/ronald-martin-66a171255/" target="_blank"><img src={LinkedIn} alt="LinkedIn Icon" /></a>
        <a href="https://github.com/RonaldMartin02" target="_blank"><img src={GitHub} alt="GitHub Icon" /></a>
        
      </footer>
    );
  }
  