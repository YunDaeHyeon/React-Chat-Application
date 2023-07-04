import { useNavigate } from "react-router-dom";
// Chakra import
import { Image } from '@chakra-ui/react'
import "./SignUpPage_style.css";

function SignUpPage(){
    let navigate = useNavigate();

    const onIndexPageMove = () => {
        navigate("/");
    }

    return(
        <div className="sign-up-main-container">
            <div className="sign-up-left-container">
                <h2>TEAMIO</h2>
                <Image
                    className="sign-up-left-background-image"
                    src="https://images.unsplash.com/photo-1543060829-a0029874b174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                    alt="signUpPage Image"
                />
            </div>
            <div className="sign-up-right-container">
                <h2>Sign up</h2>
                <p>Hello, Welcom to Teamio! First, enter your name and email<br/>you use for work.</p>
                <form>
                    <input
                        placeholder="First name"
                        type="text"/>
                    <input
                        placeholder="Last name"
                        type="text"/>
                    <input
                        placeholder="Email@work.com"
                        type="text"/>
                    <button>Contunue</button>
                </form>
                <button onClick={onIndexPageMove}>테스트용 index 페이지 이동</button>
            </div>
        </div>
    );
}

export default SignUpPage;
