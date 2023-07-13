import "./MainPage_style.css";

// Chakra import
import { Image } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem
  } from '@chakra-ui/react';

//react-icons
import { FaPeopleGroup, FaMessage, FaBell } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

function MainPage(){
    return(
        <div className="main-container">
            <div className="navigation-container">
                <div className="navigation-tab-container">
                    <Image className="navigation-tab-title-logo"
                        borderRadius="full"
                        objectFit="contain"
                        boxSize="60px"
                        src="https://github.com/YunDaeHyeon/WorkBee/assets/62231651/a2ff2e04-022d-409b-b1fb-9e13e937c6cc"
                        alt="main title logo"/>
                    <FaPeopleGroup className="navigation-tab-icon" size="22px"/>
                    <FaMessage className="navigation-tab-icon" size="22px"/>
                    <FaBell className="navigation-tab-icon" size="22px"/>
                    <IoCall className="navigation-tab-icon" size="22px"/>
                </div>
                <div className="navigation-tab-inner">
                    <div className="navigation-tab-content-selector">
                        {/* 기본적으로 DOM은 모든 element를 render함. 즉, 메뉴바 하위에 있는 아이템들도 toggle되지 않더라도 
                            전부 렌더링이 되는 소요 발생. isLazy를 명시하면 메뉴바를 toggle하지 않는 한 하위 아이템이 render되는 것을 방지.
                        */}
                        <Menu isLazy>
                          <MenuButton>
                            Coll Company
                          </MenuButton>
                          <MenuList>
                            <MenuItem>FaceBook</MenuItem>
                            <MenuItem>Instargram</MenuItem>
                            <MenuItem>SamSung</MenuItem>
                          </MenuList>
                        </Menu>
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