import "./ChatMessage_style.css";

import { Avatar, AvatarBadge } from '@chakra-ui/react';

function ChatMessage(){
    return(
        <div className="chat-message-container">
            <div className="chat-message-profile-image">
                <Avatar>
                    <AvatarBadge boxSize='1.25em' bg='green.500' src="https://images.pexels.com/photos/2748242/pexels-photo-2748242.jpeg?auto=compress&cs=tinysrgb&w=1600"/>
                </Avatar>
            </div>
            <div className="chat-message-content-container">
                <div className="chat-message-content-name">
                    <h2 className="chat-message-content-name_">DaeHyeon</h2>
                    <p className="chat-message-content-clock_">11:43AM</p>
                </div>
                <div className="chat-message-content-value">
                    Hey guys!
                    I'm sharing the monthly report for our PR activities.
                    Great job everyone.
                </div>
            </div>
        </div>
    );
}

export default ChatMessage;
