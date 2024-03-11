import { Link, useLocation } from 'react-router-dom';
// import ResumePDF from '../assets/Resume.pdf';

const jobs = [
{
    title: 'ACE Sales',
    company: 'P.C. Richard & Son',
    location: 'Manchester, CT',
    date: 'July 2023 to Present',
    description: `Providing excellent customer service before, during and after the sale in person and over the telephone. Helping customers select merchandise by explaining the features and benefits of each product. Selling extended service protection and installations on selected merchandise. Entering the sale in our computerized Point of Sale system, including customer, product, pricing, delivery,  order status and payment information. Follow up on open orders through completion.`,

},
{
    title: 'Sales Representative',
    company: 'MarketSource/Target Mobile',
    location: 'Manchester, CT',
    date: 'February 2023 to July 2023',
    description: `• Sold Phones and Accessories
                    • Provided outstanding customer service
                    • Provided in store support for Consumer Cellular.`,
},
{
    title: 'Tech Consultant',
    company: 'Target',
    location: 'Manchester, CT',
    date: 'November 2022 to January 2023',
    description: `I was tasked with maintaining the tech section of Target clean, stocking the shelves and assist Guests
    with purchases of all things Tech. I was trained how to check out items.`,
},
{
    title: 'Food and Consumables Associate',
    company: 'Walmart',
    location: 'Manchester, CT',
    date: 'June 2022 to November 2022',
    description: `I was tasked with keeping the Frozen and Dairy sections of Walmart stocked.`,
},
{
    title: 'Line Cook',
    company: 'Sliders Bar and Grill',
    location: 'Berlin, CT',
    date: 'June 2021 to August 2021',
    description: `I had to complete a customers order within a given time.`,
},
{
    title: 'Volunteer Work',
    company: 'Candy\'s Chimney Service',
    location: 'Manchester, CT',
    date: 'August 2016 to June 2018',
    description: `I was tasked with maintaining the tech section of Target clean, stocking the shelves and assist Guests
    with purchases of all things Tech. I was trained how to check out items.`,
},
];
const Education = [
    {
        title: 'Some college in Computer Science',
        school: 'CT State Community College',
        location: 'Manchester, CT',
        date: 'January 2019 to Present',
    },
    {
        title: 'High school diploma',
        school: 'Great Path Academy At Mcc',
        location: 'Manchester, CT',
        date: 'August 2014 to June 2018',
    },
];
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
        time:'6 months',
    },
    {
        title: 'PWA',
        time:'6 months',
    },
    {
        title: 'JSON',
        time:'6 months',
    },
    {
        title: 'Bootstrap',
        time: '3 years',
    },
    {
        title: 'Node.js',
        time:'6 months',
    },
    {
        title: 'APIs',
        time:'6 months',
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
            {jobs.map((job, index) => (
                <div key={index}>
                    <h3 className='Resume_Work_Title'>{job.title}</h3>
                    <p className='Resume_Work_Company'>{job.company}</p>
                    <p className='Resume_Work_Location'>{job.location}</p>
                    <p className='Resume_Work_Date'>{job.date}</p>
                    <p className='Resume_Work_Info'>{job.description}</p>
                </div>
            ))}
        </div>
        <div className='Resume_Education'>
            <h2>Education</h2>
            {Education.map((school, index) => (
                <div key={index}>
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
                    <div key={index}>
                        <h3 className='Resume_Skill_Title'>{skill.title}</h3>
                        <p className='Resume_Skill_Info'>{skill.time}</p>
                    </div>
                ))}
                </div>
</div>

    );
  }
  