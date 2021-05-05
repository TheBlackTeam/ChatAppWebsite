import React, { useState } from "react";
import * as Components from '../styled-components/ChatAppComponents'
import profileImage from '../assets/images/pp.jfif'
import { BiArrowBack, BsSearch, FiMoreVertical, IoChatboxEllipsesOutline } from "react-icons/all";
import UserChat from "./UserChat";
import ChatStreamArea from "./ChatStreamArea";

const ChatApp = () => {
    const [users, setUsers] = useState(["Kamil", "Orxan", "Elnur", "Sahil", "Mehemmed", "Nihad"])
    const [searchInputFocused, setSearchInputFocused] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const [isMe, setIsMe] = useState(false);

    function toggleMenu() {
        if (dropdown) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    }

    return (
        <Components.Container>
            <div className="main">
                <div className="left-main">
                    <div className="profile-description">
                        <div className="pd-left">
                            <div className="profile-img">
                                <img src={profileImage} alt="" />
                            </div>
                        </div>
                        <div className="pd-right">
                            <div className="add-chat">
                                <IoChatboxEllipsesOutline />
                            </div>
                            <div className="more" onClick={toggleMenu}>
                                <div><FiMoreVertical /></div>
                                    <div className={`more-dropdown ${dropdown && 'show'}`}>
                                        <div className="more-dropdown-menu">
                                            <ul>
                                                <li>
                                                    <a href="http">New Gorup</a>
                                                </li>
                                                <li>
                                                    <a href="http">Create a room</a>
                                                </li>
                                                <li>
                                                    <a href="http">Profile</a>
                                                </li>
                                                <li>
                                                    <a href="http">Archived</a>
                                                </li>
                                                <li>
                                                    <a href="http">Starred</a>
                                                </li>
                                                <li>
                                                    <a href="http">Settings</a>
                                                </li>
                                                <li>
                                                    <a href="http">Log out</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="chats-area">
                        <div className="search-field">
                            <div className="search">
                                <input onFocus={() => setSearchInputFocused(true)}
                                    onBlur={() => setSearchInputFocused(false)} type="text"
                                    placeholder={"Search chat"} />
                                <button className="icon">
                                    <div className={`${searchInputFocused ? "search-icon-hide" : "search-icon-show"}`}>
                                        <BiArrowBack /></div>
                                    <div className={`${searchInputFocused ? "back-icon-show" : "back-icon-hide"}`}>
                                        <BsSearch /></div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="users-area">
                        <div className="user">
                            <UserChat />
                        </div>
                    </div>
                </div>
                <div className="right-main">
                    <ChatStreamArea isMe={isMe} setIsMe={setIsMe} users={users} setUsers={setUsers} />
                </div>
            </div>
        </Components.Container>
    )
}

export default ChatApp;
