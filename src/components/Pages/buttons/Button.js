import './Button.style.css';
const Button =(props)=> {
  return (
    <a href={props.link} >
        <button className="button-16" role="button" >{props.text}</button>
    </a>
  )
}
export default Button;