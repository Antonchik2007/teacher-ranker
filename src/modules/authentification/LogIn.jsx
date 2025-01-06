import React from "react";
import './LogIn.css'

const LogIn = () => {

    return(
        <div className="log-in-wrapper">
            <h1 className="log-in-text">Log In</h1>
            <div className="form">
                <div className="email">
                    <p>Email</p>
                    <input placeholder="Enter your aspen email" className="log-in-input"/>
                </div>
                <div className="password">
                    <p>Password</p>
                    <input placeholder="Enter your aspen password" className="log-in-input"/>
                </div>
                <button className="sign-in-button">Sign In</button>
                <p className="aspen-text">You are required to use your aspen credentials when signing in</p>
            </div>
        </div>
    )
}

export default LogIn;