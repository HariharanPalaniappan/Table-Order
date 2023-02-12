import LogoImg from "../../components/logo/logo";
import TextBox from "../../components/textbox/textBox";
import Button from "../../components/button/button";
import './signUp.css';
import { Link } from "react-router-dom";
function signUp() {
    return(
        <div className="signUp-container">
            <LogoImg width="300px"/>
            <TextBox labelName="User Name" id="userName"/>
            <TextBox type="number" labelName="Mobile Number" id="mobileNumber"/>
            <Button name="Sign Up!"/>
            <Link to="/">Sign In!</Link>
        </div>
    );
}

export default signUp;