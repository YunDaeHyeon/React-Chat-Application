import { useNavigate } from "react-router-dom";
// Chakra import
import { Image } from '@chakra-ui/react'
import "./SignUpPage_style.css";

function SignUpPage(){
    // let navigate = useNavigate();

    // const onIndexPageMove = () => {
    //     navigate("/");
    // }

    return(
        <div className="sign-up-main-container">
            <div className="sign-up-left-container">
                <h2>WORKBEE</h2>
                <Image
                    className="sign-up-left-background-image"
                    src="https://images.unsplash.com/photo-1546872006-42c78c0ccb29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80"
                    objectFit="cover"
                    alt="signUpPage Image"
                />
            </div>
            <div className="sign-up-right-container">
                <div className="sign-up-right-inner">
                    <h2 align="left">Sign up</h2>
                    <p>Hello, Welcom to WorkBee! First, enter your name and email<br/>you use for work.</p>
                    <form className="sign-up-form">
                        <input
                            className="sign-up-input"
                            placeholder="First name"
                            />
                        <input
                            className="sign-up-input"
                            placeholder="Last name"
                            />
                        <input
                            className="sign-up-input"
                            placeholder="Email@work.com"
                            />
                        <button>Continue</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;
