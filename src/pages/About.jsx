import { Link, useLocation } from 'react-router-dom';
import Portrait from '../assets/img/Portrait.jpg';
export default function About() {
  return (
    <div className='About'>
      <h1 className='About_title'>Who is Ronald Martin?</h1>
      <div className='About_div'>
      <img className='About_img' src={Portrait} alt="" />
      <p className='About_desctiption'>Hello! My name is Ronald Martin </p>
      <p className='About_desctiption'>Aspiring Game Designer with a passion for crafting immersive digital experiences. Currently pursuing a Computer Science degree with a keen interest in leveraging programming skills to create captivating games. Proficient in Java 8 and eager to expand expertise to encompass C++ and C#, the cornerstone languages of game development. </p>
      <p className='About_description'>While my journey is anchored in Computer Science education, I harbor a deep-seated ambition to venture into the realm of game design. Recognizing the dynamic nature of the industry, I am dedicated to honing my skills and knowledge through specialized education, including upcoming enrollment in a Computer Game Design program at MCC.</p>
      <p className='About_description'>I am a dedicated and driven individual with a strong work ethic and a commitment to excellence. I am eager to contribute to the game design industry and am excited to see where my journey takes me. </p>
      </div>
    </div>
  );
}