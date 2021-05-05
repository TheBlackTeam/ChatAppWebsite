import React from "react";
import {MessageMeContainer} from "../styled-components/MessageMeComponents";

const MessageMe = () => {
    return (
        <MessageMeContainer>
            <div className="main">
                <div className="name-section">
                    <p>Name</p>
                </div>
                <div className="message-content">
                    <p>Message Message Message Message</p>
                </div>
                <div className="message-info">
                    <div className="read-receipts">

                    </div>
                    <div className="time-stamp">
                        <p>1:57 AM</p>
                    </div>
                </div>
            </div>

        </MessageMeContainer>
    );
}

export default MessageMe;
