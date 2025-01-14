import { signOut } from "firebase/auth";
import { db, auth } from "../../firebase/firebase-config";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import LogIn from "./LogIn";
import { doc, setDoc } from "firebase/firestore";

export const handleLogout = async (setIsLoggedIn) => {
    try {
        await signOut(auth);
        alert("You have successfully signed out.");
        setIsLoggedIn(false);
    } catch (err) {
        console.error("Error logging out: ", err);
        alert("An error occurred while logging out. Please try again.");
    }
};

export const handleLogIn = async (e, setEmail, setPassword, email, password, setError, setIsLoggedIn, setUserEmail) => {
    e.preventDefault();
    try{
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        setIsLoggedIn(true);
        setUserEmail(userCredential.user.email);
        alert('User logged in successfully');
    } catch(err){
        setError(err.message);
        switch (err.code) {
            case 'auth/user-not-found':
                alert('No user found with this email. Please sign up first.');
                setEmail('');
                setPassword('');
                break;
            case 'auth/wrong-password':
                alert('Incorrect password. Please try again.');
                setPassword('');
                break;
            case 'auth/invalid-email':
                alert('Please enter a valid email.');
                setEmail('');
                setPassword('');
                break;
            case 'auth/missing-email':
                alert('Please enter an email.');
                break;
            case 'auth/missing-password':
                alert('Please enter a password.');
                break;
            case 'auth/too-many-requests':
                alert('Too many unsuccessful login attempts. Please try again later.');
                break;
            case 'auth/invalid-credential':
                alert('Invalid credentials. Please try again.');
                break;
            default:
                alert('An unexpected error occurred. Please try again.');
                console.error(err);
        }
    }
    setEmail('');
    setPassword('');
}

export const handleSignUp = async (e, setEmail, setPassword, email, password, setError, setSelectedPage, setUserEmail) => {
    e.preventDefault();
    try{
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        setUserEmail(user.email);



        await setDoc(doc(db, "users", user.email), {
            email: user.email,
            uid: user.uid,
            createdAt: new Date()
        })




        alert('User created successfully');
        setEmail('');
        setPassword('');
        setSelectedPage(<LogIn/>)
    } catch(err){
        setError(err.message);
        console.log(err.message);
        console.log(err.code)
        switch(err.code){
            case 'auth/email-already-in-use':
                alert('Email already in use');
                setEmail('');
                setPassword('');
                break;
            case 'auth/invalid-email':
                alert('Please enter a valid email');
                break;
            case 'auth/missing-email':
                alert('Please enter an email');
                break;
            case 'auth/weak-password':
                alert('Password should be at least 6 characters long');
                setPassword('');
                break;
            case 'auth/missing-password':
                alert('Please enter a password');
                break;
            default:
                alert('An unexpected error occurred. Please try again.');
                console.error(err);
    }
    
}
}