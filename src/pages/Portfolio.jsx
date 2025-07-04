import Project from '../components/Project';
import { Link, useLocation } from 'react-router-dom';
import stockImg from '../assets/img/UnderConstruction.jpg';
import social from '../assets/img/Ttgs.jpg';
import finance from '../assets/img/Wisdom_Warriors_Financial.jpg';
import Tetsu from '../assets/img/TetsuPro.jpg';
// import './scss/Portfolio.scss';

export default function Portfolio() {
    const projects = [
        {
            title: "Tetsu Pro",
            description: "My first Freelance project, a website for a local wrestling promotion based out of Bristol, CT.",
            img: Tetsu,
            link: "www.tetsupro.net",
            repo: "https://github.com/RonaldMartin02/Tetsu",
            status: "Finished",
        },
        {
            title: "Wisdom Warriors Financial",
            description: "A website that gives you a way to keep track of your Finances.",
            img: finance,
            link: "https://wisdom-warriors-financial-a510ae2f09f8.herokuapp.com/",
            repo: "https://github.com/RonaldMartin02/WisdomWarrior-Finance-Tracker",
            status: "Finished",
        },
        {
            title: "Time to get Social",
            description: "A website allows users to find Breweries and to get Ice Breakers to try to help them start conversations.",
            img: social,
            link: "https://ronaldmartin02.github.io/time_to_get_social/",
            repo: "https://github.com/RonaldMartin02/time_to_get_social",
            status: "Finished",
        },
    ];
    const renderImg = (project) => {
        if (project.status === "Under Construction") {
            return stockImg;
        } else {
            return project.img;
        }
    }
    return (
        <div>
            <h1>Portfolio</h1>
            <div className='single-project'>
                {projects.map((project, index) => (
                    <Project title={project.title} description={project.description} key={index} img={renderImg(project)} link={project.link} repo={project.repo} />
                ))}
            </div>
            {/* <Link to="/">Go to Home</Link> */}
        </div>
    );
}
