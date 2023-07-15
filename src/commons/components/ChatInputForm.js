import "./ChatInputForm_style.css";

import { TbAlphabetLatin } from "react-icons/tb";
import { AiOutlinePaperClip } from 'react-icons/ai';
import { BiLink, BiSolidPaperPlane } from 'react-icons/bi';
import { MdRecordVoiceOver } from 'react-icons/md';
import { BsCameraVideoFill } from 'react-icons/bs';
import { FaFaceSmile } from 'react-icons/fa6';

function ChatInputForm(){
    return(
        <div className="chat-input-form-container">
            <textarea 
                className="chat-input-form-textarea"
                placeholder="Type a new message..."></textarea>
            <div className="chat-input-form-buttons">
                <div>
                    <TbAlphabetLatin/>
                    <AiOutlinePaperClip/>
                    <BiLink/>
                    <MdRecordVoiceOver/>
                    <BsCameraVideoFill/>
                    <FaFaceSmile/>
                </div>
                <div>
                    <BiSolidPaperPlane/>
                </div>
            </div>
        </div>
    )
}

export default ChatInputForm;