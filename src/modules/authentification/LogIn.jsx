import React, {useRef, useState} from "react";
import './LogIn.css'
import { auth } from "../../firebase/firebase";
import {useAppContext} from '../../AppContext'
import {handleLogIn, handleSignUp} from './authentification-functions'
const LogIn = () => {

    const {isLoggedIn, setIsLoggedIn, currentUser, setCurrentUser} = useAppContext();
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [data, setData] = useState(null)
    const [error, setError] = useState('')
    const emailInput = useRef(null)
    const passwordInput = useRef(null)
    const handlePasswordChange = (e) => {
        if(e.target.value.length < 6 && e.target.value.length > 0){
            passwordInput.current.style.border = '1px solid red'
        }else{
            passwordInput.current.style.border = '';
        }
        setPassword(e.target.value)
    }
    const handleEmailChange = (e) => {
        if(e.target.value.includes('@') && e.target.value.includes('.com') || e.target.value.length === 0){
            emailInput.current.style.border = '';
        }else{
            emailInput.current.style.border = '1px solid red'
        }
        setEmail(e.target.value)
    }
    return(
        <div className="log-in-wrapper">
            <h1 className="log-in-text" onClick={() => console.log(currentUser.uid)}>{isSignedUp ? 'Log in' : 'Sign up'}</h1>
            <div className="form">
                <div className="email">
                    <p>Email</p>
                    <input type='email' ref={emailInput} placeholder="Enter your email" className="log-in-input" value={email} onChange={(e) => handleEmailChange(e)}/>
                </div>
                <div className="password">
                    <p>Password</p>
                    <input type='password' ref={passwordInput} placeholder="Enter your password" className="password-input" minLength="6" value={password} onChange={(e) => handlePasswordChange(e)}/>
                    <p className="password-requirenment-text">minimum 6 characters</p>
                </div>
                <button className="sign-in-button" onClick={isSignedUp ? (e) => handleLogIn(e, setEmail, setPassword, email, password, setError, setIsLoggedIn, setCurrentUser) : (e) => handleSignUp(e, setEmail, setPassword, email, password, setError, setIsSignedUp)}>{isSignedUp ? 'Log in' : 'Sign up'}</button>
                <p className="switch-option-text">{isSignedUp ? <p>Don't have an account? <span onClick={() => setIsSignedUp(false)}>Sign up</span></p> : <p>Already have an account? <span onClick={() => setIsSignedUp(true)} className="select-log-in">Log in</span></p>}</p>
            </div>
        </div>
    )
}

export default LogIn;