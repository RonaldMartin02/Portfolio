export default function Project(props) {

    return (
        <div className="card">
            <div className="card_body">
                <h2 className="card_title">{props.title}</h2>
                <img className="card_img" src={props.img} alt={props.title} />
                <p className="card_description">{props.description}</p>
            </div>
            <div className="card_footer">
                <button onClick={() => window.location.href = props.link} className="card_link">
                    View Project
                </button>
                <button className="card_repo" onClick={() => window.location.href = props.repo}>
                    View Repository
                </button>
            </div>
        </div>
    );
}