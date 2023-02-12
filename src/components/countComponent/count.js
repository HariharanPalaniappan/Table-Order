import { useState } from 'react';
import Button from '../button/button';
function Count(){
    const [count, setCount] = useState(0);
    const incCount = () => {
        setCount(count+1);
    }
    const decCount = () => {
        if(count > 0){
            setCount(count-1);
        }
        
    }
    const countButton = {
        width: "35px",
        height: "35px",
        padding: "5px 10px"
    };
    const countcontainer = {
        display: "flex",
        "align-items": "center",
        "justify-content": "space-between",
        width: "120px"
    };
    return(
        <div style={countcontainer} className="count-container">
            <Button style={countButton}  eventListner={incCount} name="+"/>
            <span className='count'>{count}</span>
            <Button style={countButton}  eventListner={decCount} name="-"/>
        </div>
    );
}

export default Count;