import KakaoLogin from "react-kakao-login";

import "./KakaoLoginComponent_style.css";

function KakaoLoginComponent(){
    // 추후 분리시켜 git에서 제외.
    const kakaoClientId = '17f2761a93654cde2dedadd4b14892bb';

    // 로그인 성공 (엑세스 토큰 전달)
    const KakaoOnSuccess = async(data) => {
        console.log(data);
        const idToken = data.response.access_token;
    }

    // 로그인 실패
    const KakaoOnFailure = (error) => {
        alert(error);
    }

    return(
        <>
            <KakaoLogin
                className="kakao-login-button"
                token={kakaoClientId}
                onSuccess={KakaoOnSuccess}
                onFail={KakaoOnFailure}
            />
        </>
    );
}

export default KakaoLoginComponent;