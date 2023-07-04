import "./IndexPage_style.css";
import { useNavigate } from "react-router-dom";
// Chakra import
import { Image } from '@chakra-ui/react'
// react-icons
import { AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';


function IndexPage() {
    let navigate = useNavigate();

    const onClickSignUpPageMove = () => {
        navigate("/sign-up");
    }

    return(
        <div className="index-container">
            <div className="index-header-container">
                <h1>TEAMIO</h1>
                <button onClick={onClickSignUpPageMove}>Sign up now</button>
            </div>
            <div className="index-figure-container">
                <div className="index-figure-left">
                    <div>
                        <h2>Bring your work<br/>& team together</h2>
                        <p>Work fast and flexible by communicating effectively.</p>
                        <button onClick={onClickSignUpPageMove}>Sign up now</button>
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
                <div className="index-footer-left">
                    <div>
                        <h2>TEAMIO</h2>
                        <p className="title">Simple tool for team messaging and communication.</p>
                        <p className="content">Stay in touch with us.</p>
                        <ul className="icons">
                            <li><AiOutlineInstagram size="24px"/></li>
                            <li><AiOutlineFacebook size="24px"/></li>
                            <li><FaTwitter size="24px"/></li>
                        </ul>
                    </div>
                </div>
                <div className="index-footer-right">
                    <ul>
                        <li className="title">Product</li>
                        <li>Features</li>
                        <li>Integrations</li>
                        <li>Enterprise</li>
                    </ul>
                    <ul>
                        <li className="title">Pricing</li>
                        <li>Free version</li>
                        <li>Compansion</li>
                    </ul>
                    <ul>
                        <li className="title">Company</li>
                        <li>About us</li>
                        <li>Jobs</li>
                        <li>News</li>
                    </ul>
                    <ul>
                        <li className="title">Resources</li>
                        <li>Blog</li>
                        <li>Knowledge hub</li>
                        <li>Sales support</li>
                    </ul>
                    <ul>
                        <li className="title">Support</li>
                        <li>Chat</li>
                        <li>Feedback</li>
                        <li>COntact form</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default IndexPage;