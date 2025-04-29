import Divider from '../../../Tools/Line/LineDivider';
import Button from '../../../Tools/Button/Button';
import './ProjectText.styles.css';
const ProjectText=(props)=> {
  return (
    
        <div className='project-details' style={props.Styles}>
          <div className='index_1'>
              <Divider />
              <span className='indexNumber_1'>{props.Index}</span>
          </div>

          <h2 className='project-title'>{props.Title}</h2>
          <p className='project-text'>{props.Discription}</p>
          
          <Button text={props.ButtonText} link={props.ButtonLink}/>
        </div>
    
  )
}
export default ProjectText;