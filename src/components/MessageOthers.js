import React from "react";
import {MessageOthersContainer} from "../styled-components/MessageOthersComponents";

const MessageOthers = () => {
    return (
        <MessageOthersContainer>
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
        </MessageOthersContainer>
    );
}

export default MessageOthers;
