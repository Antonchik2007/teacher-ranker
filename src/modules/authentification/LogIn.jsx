import React, {useState} from "react";
import './LogIn.css'

const LogIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return(
        <div className="log-in-wrapper">
            <h1 className="log-in-text">Log In</h1>
            <div className="form">
                <div className="email">
                    <p>Email</p>
                    <input type='email' placeholder="Enter your aspen email" className="log-in-input" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="password">
                    <p>Password</p>
                    <input type='password' placeholder="Enter your aspen password" className="log-in-input" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button className="sign-in-button" onClick={() => console.log(email, password)}>Sign In</button>
                <p className="aspen-text">You are required to use your aspen credentials when signing in</p>
            </div>
        </div>
    )
}

export default LogIn;