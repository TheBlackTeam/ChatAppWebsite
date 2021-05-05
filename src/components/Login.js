import React, {useState} from "react";
import {Container} from "../styled-components/SigninComponents";
import {AiFillApple, AiFillLinkedin, AiOutlineGoogle} from 'react-icons/ai'
import {FaFacebook, IoChatbubblesOutline} from "react-icons/all";

const Login = () => {
    return (
        <Container>
            <div className="header">
                <IoChatbubblesOutline/><h2>Chat App Web</h2>
            </div>
            <div className="main">
                <h3>Login and enjoy using our app!</h3>
                <div className="login_google">
                    <button>
                        <AiOutlineGoogle/> <p>Login with Google</p>
                    </button>
                </div>
                <div className="login_facebook">
                    <button>
                        <FaFacebook/> <p>Login with Facebook</p>
                    </button>
                </div>
                <div className="login_apple">
                    <button>
                        <AiFillApple/> <p>Login with Apple</p>
                    </button>
                </div>
                <div className="login_linkedin">
                    <button>
                        <AiFillLinkedin/> <p>Login with Linkedin</p>
                    </button>
                </div>
            </div>
        </Container>
    )
}

export default Login;
