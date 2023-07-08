import "./MainPage_style.css";

function MainPage(){
    return(
        <div className="main-container">
            <div className="navigation-container">
                <div className="navigation-tab-container">
                    1
                </div>
                <div className="navigation-tab-inner">
                    2
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