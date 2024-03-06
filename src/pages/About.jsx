import { Link, useLocation } from 'react-router-dom';
import Portrait from '../assets/img/Portrait.jpg';
export default function About() {
  const currentPage = useLocation().pathname;

  return (
    <div className='About'>
      <h1 className='About_title'>Who is Ronald Martin?</h1>
      <div className='About_div'>
      <img className='About_img' src={Portrait} alt="" />
      <p className='About_desctiption'>Hello! My name is Ronald Martin </p>
      <p className='About_desctiption'>I want to become a game designer but wanted a backup plan before I go full steam ahead on game development. I am in college currently for Computer Science. Once I finish this degree I will be coming back to MCC for Computer Game Design. I already know how to code in Java 8. I plan on learing C++ and C# because those two languages are used the most in game development.  </p>
      </div>
    </div>
  );
}