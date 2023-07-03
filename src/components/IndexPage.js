import "./IndexPage_style.css";

// Chakra import
import { Image } from '@chakra-ui/react'

function IndexPage() {
    return(
        <div className="index-container">
            <div className="index-header-container">
                <h1>TEAMIO</h1>
                <button>Sign up now</button>
            </div>
            <div className="index-figure-container">
                <div className="index-figure-left">
                    <div>
                        <h2>Bring your work<br/>& team together</h2>
                        <p>Work fast and flexible by communicating effectively.</p>
                        <button>Sign up now</button>
                    </div>
                </div>
                <div className="index-figure-right">
                    <Image
                        className="index-figure-right-image"
                        src='https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg' alt='index intro' />
                </div>
            </div>
            <div className="index-section-container">
                <p>"We love using Teamio. Our efficiency grew by 45% and that's amazing!"</p>
                <div className="index-section-profile">
                    <Image
                        className="index-sesction-image"
                        borderRadius="full"
                        objectFit="cover"
                        boxSize="30px"
                        src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_640.jpg"/>
                    <p className="index-sesction-name">DH Company CEO.</p>
                </div>
            </div>
            <div className="index-footer-container">
                footer 파트
            </div>
        </div>
    );
}

export default IndexPage;