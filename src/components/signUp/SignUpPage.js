import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// Chakra import
import { Image } from '@chakra-ui/react'
import "./SignUpPage_style.css";
// import KakaoLoginComponent from "../../commons/api/KakaoLoginComponent";
import axios from "axios";

function SignUpPage(){
    let navigate = useNavigate();

    const [user, setUser] = useState({
        userName : '',
        userEmail : '',
        userPassword : '',
        userPasswordCheck : ''
    });

    const { userName, userEmail, userPassword, userPasswordCheck } = user;

    // input 태그 포커싱을 위한 DOM 접근 훅 호출
    const passwordInput = useRef();

    // onChages Handlers
    const onInputChange = (e) => {
        // e.target에서 입력한 input의 id와 value 추출
        const { id, value } = e.target;
        setUser({
            ...user,
            [id] : value
        });
    }

    // onReset Handlers
    const onReset = (e) => {
        setUser({
            userName : '',
            userEmail : '',
            userPassword : '',
            userPasswordCheck : ''
        });
    };
    
    // Button Click Event
    const onClickSetWorkPageMove = async(e) => {
        // 입력하지 않은 칸이 존재한다면
        if(user.userName.length === 0 || user.userId.length === 0 || 
        user.userPassword.length === 0 || user.userPasswordCheck === 0){
            alert("입력하지 않은 칸이 존재합니다.");
            e.preventDefault(); // submit 중단
        }else{
            // 비밀번호 확인이 틀렸으면
            if(user.userPassword !== user.userPasswordCheck){
                alert("동일한 비밀번호가 아닙니다.");
                setUser({...user, userPassword: '', userPasswordCheck: ''});
                passwordInput.current.focus(); // 포커스 지정
                e.preventDefault();
            }else{
                e.preventDefault();
                const response = await axios.post(`https://workbee-backend-edubx.run.goorm.site/action`,{user});
                console.log(response);
                if(response.data === 'error'){
                    alert("데이터를 저장하는 중 오류가 발생하였습니다.");
                }else if(response.data === 'success'){
                    onReset();
                    alert("회원가입 되었습니다.");
                    navigate("/create-company");
                }
            }
        }
    }

    // 로그인 페이지 이동
    const onClickSignInPageMove = () => {
        navigate("/sign-in");
    }

    // https://velog.io/@badasea/ExpressNode.js-Mysql-3-MVC 참고
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
                    <p>Welcome to WorkBee. If it's your first visit. Please sign up as a member.</p>
                    <form className="sign-up-form">
                        <input
                            id="userName"
                            className="sign-up-input"
                            placeholder="Your name"
                            value={userName}
                            onChange={onInputChange}
                            />
                        <input
                            id="userEmail"
                            className="sign-up-input"
                            placeholder="Email@work.com"
                            value={userEmail}
                            onChange={onInputChange}
                            />
                        <input
                            id="userPassword"
                            className="sign-up-input"
                            placeholder="Password"
                            value={userPassword}
                            onChange={onInputChange}
                            ref={passwordInput}
                            />
                        <input 
                            id="userPasswordCheck"
                            className="sign-up-input"
                            placeholder="PasswordCheck"
                            value={userPasswordCheck}
                            onChange={onInputChange}
                            />
                        <button onClick={onClickSetWorkPageMove}>Continue</button>
                    </form>
                    <div className="check-sign-up">
                        <p>Have you ever signed up?</p>
                        <button onClick={onClickSignInPageMove}>Sign in</button>  
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;
