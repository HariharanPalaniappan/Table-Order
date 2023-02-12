import logo from '../../logo.svg';
import './logo.css'
function logoImg(props){
    return(
        <div className="logo-container">
            <img width={props.width} className="logo" src={logo}/>
        </div>
    )
}

export default logoImg;