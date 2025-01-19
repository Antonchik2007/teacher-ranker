import React, {useState} from "react";
import './LogIn.css'

import {useAppContext} from '../../AppContext'
import {handleLogIn, handleSignUp} from './authentification-functions'
const LogIn = () => {

    const {isLoggedIn, setIsLoggedIn} = useAppContext();
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [data, setData] = useState(null)
    const [error, setError] = useState('')

    const logInButton =  <p>Log in</p> 
    return(
        <div className="log-in-wrapper">
            <h1 className="log-in-text">{isSignedUp ? 'Log in' : 'Sign up'}</h1>
            <div className="form">
                <div className="email">
                    <p>Email</p>
                    <input type='email' placeholder="Enter your email" className="log-in-input" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="password">
                    <p>Password</p>
                    <input type='password' placeholder="Enter your password" className="log-in-input" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button className="sign-in-button" onClick={isSignedUp ? (e) => handleLogIn(e, setEmail, setPassword, email, password, setError, setIsLoggedIn) : (e) => handleSignUp(e, setEmail, setPassword, email, password, setError, setIsSignedUp)}>{isSignedUp ? 'Log in' : 'Sign up'}</button>
                <p className="switch-option-text">{isSignedUp ? <p>Don't have an account? <span onClick={() => setIsSignedUp(false)}>Sign up</span></p> : <p>Already have an account? <span onClick={() => setIsSignedUp(true)}>Log in</span></p>}</p>
            </div>
        </div>
    )
}

export default LogIn;