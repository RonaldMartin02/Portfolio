
export default function Job(props) {
    return (
        <div className='Resume_Work_Div' >
            <h3 className='Resume_Work_Title'>{props.title}</h3>
            <p className='Resume_Work_Company'>{props.company}</p>
            <p className='Resume_Work_Location'>{props.location}</p>
            <p className='Resume_Work_Date'>{props.date}</p>
            <p className='Resume_Work_Info'>{props.description}</p>
        </div>
    );
}