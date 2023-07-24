import "./ChatMessage_style.css";

function ChatMessage(){
    return(
        <div className="chat-message-container">
            <div className="chat-message-profile-image">

            </div>
            <div className="chat-message-content-container">
                <div className="chat-message-content-name">
                    Daehyeon 11:43AM
                </div>
                <div className="chat-message-content-value">
                    Hey guys! My name is DaeHyeon. Nice to meet you.
                </div>
            </div>
        </div>
    );
}

export default ChatMessage;
