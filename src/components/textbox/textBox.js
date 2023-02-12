import "./textbox.css"
function textBox(props) {
    return(
        <div className="textbox-container">
            <label htmlFor={props.id}>{props.labelName}</label>
            <input onChange={e=> props.eventListner(e)} type={props.type} className="textbox" id={props.id}/>
        </div>
    );
}

export default textBox;