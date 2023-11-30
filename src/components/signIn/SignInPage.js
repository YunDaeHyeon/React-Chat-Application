import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// Chakra import
import { Image } from '@chakra-ui/react'
import "./SignInPage_style.css";
import KakaoLoginComponent from "../../commons/api/KakaoLoginComponent";
import axios from "axios";

function SignInPage(){
    let navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    // input 태그 포커싱을 위한 DOM 접근 훅 호출
    const nameInput = useRef();

    // onChages Handlers
    const onNameChage = (e) => { setName(e.target.value); }
    const onEmailChage = (e) => { setEmail(e.target.value); }
    const onReset = (e) => { setName(''); setEmail(''); }
    
    // Button Click Event
    const onClickSetWorkPageMove = async(e) => {
       e.preventDefault();
       navigate("/main");
    }

    // 회원가입 페이지 이동
    const onClickSignUpPageMove = () => {
        navigate("/sign-up");
    }

    return(
        <div className="sign-in-main-container">
            <div className="sign-in-left-container">
                <h2>WORKBEE</h2>
                <Image
                    className="sign-in-left-background-image"
                    src="https://images.unsplash.com/photo-1633113214698-485cdb2f56fd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    objectFit="cover"
                    alt="signInPage Image"
                />
            </div>
            <div className="sign-in-right-container">
                <div className="sign-in-right-inner">
                    <h2>Sign In</h2>
                    <p>Have a GREAT day!</p>
                    <form className="sign-in-form">
                        <input
                            className="sign-in-input"
                            placeholder="Your name"
                            onChange={onNameChage}
                            value={name}
                            ref={nameInput}
                            />
                        <input
                            className="sign-in-input"
                            placeholder="Email@work.com"
                            onChange={onEmailChage}
                            value={email}
                            />
                        <button onClick={onClickSetWorkPageMove}>Sign In</button>
                    </form>
                    <div className="check-sign-in">
                        <p>Don't hava an account?</p>
                        <button onClick={onClickSignUpPageMove}>Sign Up</button>  
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignInPage;
