import './button.css'
function button(props) {
    return(
        <div className="button-container">
            {console.log(props)}
            <button style={props.style} onClick={(e)=> {props.eventListner(e)}} className="button">{props.name}</button>
        </div>
    );
}

export default button;