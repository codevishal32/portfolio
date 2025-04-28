import './Titles.styles.css';
const Titles=(props)=>{
    return (
        <div className='Title-heading'>
            <p className="Title-label">{props.heading}</p>
            <h2 className="Title-title">
                {props.description}
            </h2>
        </div>
    );
};

export default Titles;