import React, {useState} from "react";
import {Container} from "../styled-components/UserChatComponents";
import {AiOutlineDown, BiVolumeMute, GoUnmute} from "react-icons/all";
import profileImage from '../assets/images/pp.jfif'

const UserChat = () => {
    const [muted, setMuted] = useState(false)
    return (
        <Container>
            <div className="main">
                <div className="left">
                    <div className="image-area">
                        <img src={profileImage} width={"40px"} height={"40px"} alt="pp"/>
                    </div>
                </div>
                <div className="middle">
                    <div className="context-area">
                        <h3>X-Days</h3>
                        <p>Mehemmed Verdiyev: eladi</p>
                    </div>
                </div>
                <div className="right">
                    <div className="time-stamp">
                        <p>9:35 AM</p>
                    </div>
                    <div className="muted-case">
                        <div className={`${muted ? "mute-hide" : "mute-show"}`}><BiVolumeMute/></div>
                        <div className={`${muted ? "unmute-show" : "unmute-hide"}`}><GoUnmute/></div>
                        <div className="down-icon"><AiOutlineDown/></div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default UserChat;
