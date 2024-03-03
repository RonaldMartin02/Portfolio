import Project from '../components/Project';
import { Link, useLocation } from 'react-router-dom';
import stockImg from '../assets/img/UnderConstruction.jpg';
import social from '../assets/img/Ttgs.jpg';

export default function Portfolio() {
    const currentPage = useLocation().pathname;
    const projects = [
        {
            title: "Gizmo Gaming",
            description: "A Blog to show off builds and add comments .",
            link: "",
            img: stockImg,
            repo: "",
        },
        {
            title: "Wisdom Warriors Financial",
            description: "A website that a way to keep track of your Finances.",
            link: "https://wisdom-warriors-financial-a510ae2f09f8.herokuapp.com/",
            img: stockImg,
            repo: "https://github.com/RonaldMartin02/WisdomWarrior-Finance-Tracker",
        },
        {
            title: "Time to get Social",
            description: "A website allows users to find Breweries and to get Ice Breakers to try to help them start converstions.",
            link: "https://ronaldmartin02.github.io/time_to_get_social/",
            img: social,
            repo: "https://github.com/RonaldMartin02/time_to_get_social",
        },
    ];
    return (
        <div>
        <h1>Portfolio</h1>
        <div className='single-project'>
            {projects.map((project, index) => (
                <Project title={project.title} description={project.description} key={index} img={project.img} link={project.link} repo={project.repo}/>
                ))}   
        </div>
            {/* <Link to="/">Go to Home</Link> */}
                </div>
    );
  }
  