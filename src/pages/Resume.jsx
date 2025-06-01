import { Link, useLocation } from 'react-router-dom';
import Job from '../components/job';
// import ResumePDF from '../assets/Resume.pdf';
import Education from '../components/Json/Education.json';
import Jobs from '../components/Json/Jobs.json';
import './scss/Resume.scss';
const skills = [
    {
        title: 'Customer Service',
    },
    {
        title: 'Highly Adaptable',
    },
    {
        title: 'Proficient Organization',
    },
    {
        title: 'Critical thinking and problem solving',
        time: '10+ years',
    },
    {
        title: 'Java',
        time: '2 years',
    },
    {
        title: 'JavaScript',
        time: '2 years',
    },
    {
        title: 'MySQL',
        time: '2 Years',
    },
    {
        title: 'Git',
        time: '6 Months',
    },
    {
        title: 'HTML5',
        time: '2 Years',
    },
    {
        title: 'User Interface (UI)',
        time: '6 months',
    },
    {
        title: 'Computer Science',
        time: '3 years',
    },
    {
        title: 'GitHub',
        time: '1 Year',
    },
    {
        title: 'CSS',
        time: '2 Years',
    },
    {
        title: 'REST',
        time: '6 months',
    },
    {
        title: 'PWA',
        time: '6 months',
    },
    {
        title: 'JSON',
        time: '6 months',
    },
    {
        title: 'Bootstrap',
        time: '3 years',
    },
    {
        title: 'Node.js',
        time: '6 months',
    },
    {
        title: 'APIs',
        time: '6 months',
    },

]
const Links = [
    {
        title: 'GitHub',
        link: 'https://github.com/RonaldMartin02',
    },
    {
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/ronald-martin-66a171255/',
    },
]

export default function Resume() {
    return (
        <div className='Resume'>
            <div className='Resume_Work'>
                <h2>Work Experience</h2>
                {Jobs.jobs.map((job) => (
                    <Job title={job.title} company={job.company} location={job.location} date={job.date} description={job.description} />
                ))}
            </div>
            <div className='Resume_Education'>
                <h2>Education</h2>
                {Education.Education.map((school, index) => (
                    <div className='Resume_Education_Div' key={index}>
                        <h3 className='Resume_Education_Title'>{school.title}</h3>
                        <p className='Resume_Education_School'>{school.school}</p>
                        <p className='Resume_Education_Location'>{school.location}</p>
                        <p className='Resume_Education_Date'>{school.date}</p>
                    </div>
                ))}
            </div>
            <div className='Resume_Skills'>
                <h2>Skills</h2>
                {skills.map((skill, index) => (
                    <div className='Resume_Skill_Div' key={index}>
                        <h3 className='Resume_Skill_Title'>{skill.title}</h3>
                        <p className='Resume_Skill_Info'>{skill.time}</p>
                    </div>
                ))}
            </div>
        </div>

    );
}
