import React from "react";
import {Container} from "../styled-components/ChatStreamAreaComponents";
import profileImage from '../assets/images/pp.jfif'
import {AiOutlineSend, BsSearch, FiMoreVertical, GrEmoji, ImAttachment, MdKeyboardVoice} from "react-icons/all";
import MessageMe from "./MessageMe";
import MessageOthers from "./MessageOthers";

const ChatStreamArea = ({users, setUsers, isMe, setIsMe}) => {
    return (
        <Container>
            <div className="header">
                <div className="img-section">
                    <img src={profileImage} alt="pp"/>
                </div>
                <div className="header-description">
                    <h3>X-Days</h3>
                    <p title={users.toString()}>
                        {
                            users.toString()
                        }
                    </p>
                </div>
                <div className="header-more-section">
                    <div className="search">
                        <BsSearch/>
                    </div>
                    <div className="more">
                        <FiMoreVertical/>
                    </div>
                </div>
            </div>
            <div className="messages-area">

                <div className="message-container">
                    <div className="message">
                        <MessageMe/>
                    </div>
                </div>
                <div className="message-container">
                    <div className="message">
                        {isMe ? <MessageOthers/> : <MessageMe/>}
                    </div>
                </div>
                <div className="message-container">
                    <div className="message">
                        <MessageOthers/>
                    </div>
                </div>


            </div>
            <div className="send-message-area">
                <div className="emoji-icon">
                    <GrEmoji/>
                    <div className="attach-icon">
                        <ImAttachment/>
                    </div>
                </div>
                <div className="write-message-section">
                    <input type="text" placeholder={"Type a message"}/>
                </div>
                <div className="send-section">
                    <div className="send-icon">
                        <AiOutlineSend/>
                    </div>
                    <div className="mic-icon">
                        <MdKeyboardVoice/>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default ChatStreamArea;
