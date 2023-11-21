import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// Chakra import
import { Image } from '@chakra-ui/react'
import "./SignUpPage_style.css";
import KakaoLoginComponent from "../../commons/api/KakaoLoginComponent";
import axios from "axios";

function SignUpPage(){
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
        const response = await axios.post(`https://${auth.serverIP}:5000/action`,{name, email});
        if(response.data === 'failure'){
            alert("가입 실패");
            nameInput.current.focus(); // name input에 포커스 지정
            onReset(e);
        }else if(response.data === 'error'){
            alert("서버 오류");
            onReset(e);
        }else if(Object.keys(response.data).length !== 0){
            alert("성공");
            onReset(e);
            navigate("/set-work");
        }
    }

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
                    <h2>Sign up</h2>
                    <p>Hello, Welcom to WorkBee! First, enter your name and email<br/>you use for work.</p>
                    <form className="sign-up-form">
                        <input
                            className="sign-up-input"
                            placeholder="Your name"
                            onChange={onNameChage}
                            value={name}
                            ref={nameInput} // 가입 실패 시 포커싱 지정
                            />
                        <input
                            className="sign-up-input"
                            placeholder="Email@work.com"
                            onChange={onEmailChage}
                            value={email}
                            />
                        <button onClick={onClickSetWorkPageMove}>Continue</button>
                    </form>
                        <KakaoLoginComponent/>
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;
