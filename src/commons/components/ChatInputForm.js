import { useState } from "react";

import "./ChatInputForm_style.css";

import { TbAlphabetLatin } from "react-icons/tb";
import { AiOutlinePaperClip } from 'react-icons/ai';
import { BiLink, BiSolidPaperPlane } from 'react-icons/bi';
import { MdRecordVoiceOver } from 'react-icons/md';
import { BsCameraVideoFill } from 'react-icons/bs';
import { FaFaceSmile } from 'react-icons/fa6';

import {
    Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverCloseButton,
    PopoverBody
} from '@chakra-ui/react';
import EmojiPicker from "emoji-picker-react";

function ChatInputForm(){
    const [chatInputValue, setChatInputValue] = useState("");
    const [clickEmoji, setClickEmoji] = useState(false);

    const onChatInputFormChange = (e) => {
        setChatInputValue(e.target.value);
    }

    // 이모지 선택 버튼
    const onClickEmojiButton = () => {
        setClickEmoji(prev => !prev);
        console.log(clickEmoji);
    }
    
    return(
        <div className="chat-input-form-container">
            <textarea 
                className="chat-input-form-textarea"
                placeholder="Type a new message..."
                onChange={onChatInputFormChange}
                value={chatInputValue}></textarea>
            <div className="chat-input-form-buttons">
                <div className="chat-input-form-icons">
                    <TbAlphabetLatin size="24px" style={{marginLeft:"10px"}}/>
                    <AiOutlinePaperClip size="24px" style={{marginLeft:"10px", marginRight:"10px"}}/>
                    <BiLink size="24px"/>
                    <MdRecordVoiceOver size="24px" style={{marginLeft:"10px", marginRight:"10px"}}/>
                    <BsCameraVideoFill size="24px"/>
                    <Popover placement='top-start'>
                        <PopoverTrigger>
                            <FaFaceSmile 
                                size="24px" 
                                style={{
                                    marginLeft:"10px",
                                    marginRight:"10px",
                                    cursor:'pointer',
                                }}
                            />
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverHeader fontWeight='semibold'>이모티콘 선택</PopoverHeader>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody>
                                <EmojiPicker
                                    height={350}
                                    width="40%"
                                    autoFocusSearch={false}/>
                            </PopoverBody>
                      </PopoverContent>
                    </Popover>
                </div>
                <div className="chat-input-form-send">
                    <BiSolidPaperPlane style={{marginRight:"10px"}}size="24px"/>
                </div>
            </div>
        </div>
    )
}

export default ChatInputForm;