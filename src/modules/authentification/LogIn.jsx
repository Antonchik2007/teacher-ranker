import React, {useState} from "react";
import './LogIn.css'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from '../../firebase/firebase'

const LogIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [data, setData] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://127.0.0.1:5000/process', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: email, password }),
          });
        const result = await response.json();
        setData(result);
        if (result.success == true){
            const userEmail = `${email}@yourapp.com`;
            try{
                const userCredentials = await createUserWithEmailAndPassword(auth, userEmail, password);
                const user = userCredentials.user

                await setDoc(doc(db, "users", userEmail), {
                    username: email,
                    email: userEmail,
                    password: password,
                    uid: user.uid,
                    createdAt: new Date()
                })
                console.log('user created successfully');
                

            } catch(error){
                console.log(error.message);
                
            }
        }
        
        
    }
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
                <button className="sign-in-button" onClick={(e) => handleSubmit(e, )}>Sign In</button>
                <p className="aspen-text">You are required to use your aspen credentials when signing in</p>
            </div>
        </div>
    )
}

export default LogIn;