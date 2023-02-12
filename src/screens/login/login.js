import { useState } from 'react';
import LogoImg from "../../components/logo/logo";
import './login.css'
import TextBox from "../../components/textbox/textBox";
import Button from "../../components/button/button";
import { Link,useNavigate  } from "react-router-dom";
import { user_data } from "../../dummyData/dummy";



function LoginScreen(){
    const [userName, setUserName] = useState();
    let navigate = useNavigate(); 
    const handleUname = (e) =>{
        setUserName(e.target.value);
    }
    const uname = () =>{
        const error = document.querySelector('.error-label');
        if(user_data.user.name === userName){
            error.style.opacity = '0';
            navigate('/orderList');
        } else {
            error.style.opacity = '1';
        }
    }
    const loginButton = {
        height: "35px"
    };
    return(
        <div className="login-container">
            <LogoImg width="300px"/>
            <TextBox type="text" labelName="User Name" id="userName" eventListner={handleUname}/>
            <label className='error-label'>Please enter valid User name!</label>
            <Button style={loginButton} eventListner={uname} name="Log in"/>
            <Link to="/signUp">Sign Up!</Link>
        </div>
    );
}

export default LoginScreen;