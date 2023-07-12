import "./MainPage_style.css";

//react-icons
import { FaPeopleGroup, FaMessage, FaBell } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

function MainPage(){
    return(
        <div className="main-container">
            <div className="navigation-container">
                <div className="navigation-tab-container">
                    <h2 className="navigation-tab-title-top">WORK</h2>
                    <h2 className="navigation-tab-title-bottom">BEE</h2>
                    <FaPeopleGroup className="navigation-tab-icon" size="22px"/>
                    <FaMessage className="navigation-tab-icon" size="22px"/>
                    <FaBell className="navigation-tab-icon" size="22px"/>
                    <IoCall className="navigation-tab-icon" size="22px"/>
                </div>
                <div className="navigation-tab-inner">
                    <div className="navigation-tab-content-selector">
                        선택창
                    </div>
                    <div className="navigation-tab-content">
                        내용
                    </div>
                </div>
            </div>
            <div className="content-container">
                <div className="content-search-panel">
                    검색
                </div>
                <div className="content-inner">
                    메인 컨텐츠
                </div>
            </div>
        </div>
    );
}

export default MainPage;