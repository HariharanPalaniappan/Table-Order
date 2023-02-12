import './dropdown.css'
function dropdown(props) {
    return(
        <div className="dropdown-container">
            {console.log(props.option)}
            <select>
                <option>Please select user type</option>
                {props.option && props.option.map(e=>{
                   return <option id={e}>{e}</option>
                })}
            </select>
        </div>
    );
}

export default dropdown;