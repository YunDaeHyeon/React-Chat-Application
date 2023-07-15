import "./MainPage_style.css";

// Chakra import
import { Image } from '@chakra-ui/react';
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons';
import {
    Text, Box,
    Menu, MenuButton, MenuList, MenuItem,
    Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon,
    Avatar, AvatarGroup
} from '@chakra-ui/react';

//react-icons
import { FaPeopleGroup, FaMessage, FaBell } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { AiFillFolder } from 'react-icons/ai';

// hook
import CircleIcon from "../../commons/components/CircleIcon";
import ChatInputForm from "../../commons/components/ChatInputForm";

function MainPage(){
    return(
        <div style={{fontFamily:"Kanit"}}className="main-container">
            <div className="navigation-container">
                <div className="navigation-tab-container">
                    <Image className="navigation-tab-title-logo"
                        borderRadius="full"
                        objectFit="contain"
                        boxSize="55px"
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
                          <MenuButton className="content-selector-title">
                            Cool Company <ChevronDownIcon />
                          </MenuButton>
                          <MenuList>
                            <MenuItem>FaceBook</MenuItem>
                            <MenuItem>Instargram</MenuItem>
                            <MenuItem>SamSung</MenuItem>
                          </MenuList>
                        </Menu>
                    </div>
                    <div className="navigation-tab-content">
                        <Text 
                            style={{marginLeft: '15px', marginTop: '10px', marginBottom: '10px'}}
                            fontSize='md'>
                            Your Treams</Text>
                        <div className="navigatin-tab-accordion">
                            {/* 아코디언 시작 */}
                            <Accordion allowMultiple>
                                {/* 아코디언 아이템 */}
                                <AccordionItem>
                                    {({isExpanded}) => (
                                        <>
                                            <h2>
                                                <AccordionButton>
                                                    <Box as="span" flex='1' textAlign='left'>
                                                        <CircleIcon boxSize={3} color='green.500' /> 
                                                        {!isExpanded ? <Text display='inline-block' marginLeft='5px'> Team marketing</Text> : <Text as='b'> Team marketing</Text>}
                                                    </Box>
                                                    <AccordionIcon/>
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel padding='0px'>
                                                <p className="accordion-panel-item">Public relations</p>
                                                <p className="accordion-panel-item">Content creation</p>
                                                <p className="accordion-panel-item">Digital production</p>
                                            </AccordionPanel>
                                        </>
                                    )}
                                </AccordionItem>
                                {/* 아코디언 아이템 */}
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                              Team design
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                      테스트 아코디언 패널 1
                                    </AccordionPanel>
                                </AccordionItem>
                                {/* 아코디언 아이템 */}
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                              Team UX
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                      테스트 아코디언 패널 2
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                            {/* 아코디언 마지막 */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-container">
                <div className="content-search-panel">
                    <div className="content-input-container">
                      <input type="text" placeholder="Search in {value}" />
                      <SearchIcon className="content-search-icon" />
                    </div>
                </div>
                <div className="content-inner">
                    <div className="content-header">
                        <div className="content-header-left">
                            <h2>Public relations</h2>
                            <p> · All stuff PR and media!</p>
                        </div>
                        <div className="content-header-right">
                            <AiFillFolder style={{marginRight: '10px'}} size="30px"/>
                            <AvatarGroup max={4}>
                                <Avatar className="content-header-right-icon" name='Bruno Palace' src='https://images.pexels.com/photos/17488465/pexels-photo-17488465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                                <Avatar className="content-header-right-icon" name='Segun Adebayo' src='https://images.pexels.com/photos/5528969/pexels-photo-5528969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                                <Avatar className="content-header-right-icon" name='Kent Dodds' src='https://images.pexels.com/photos/10312001/pexels-photo-10312001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                                <Avatar className="content-header-right-icon" name='Prosper Otemuyiwa' src='https://images.pexels.com/photos/1715092/pexels-photo-1715092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                                <Avatar className="content-header-right-icon" name='Christian Nwamba' src='https://images.pexels.com/photos/2766408/pexels-photo-2766408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                            </AvatarGroup>
                        </div>
                    </div>
                    <div className="content-body">
                        <div className="content-body-inner">
                            <ChatInputForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;