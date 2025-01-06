import React from "react";
import './profilePage.css'

const ProfilePage = () => {

    return(
        <div className="profie-page-wrapper">
            <h1 className="profile-text">Profile</h1>
            <div className="buttons">
                <button className="button">Sign up/Log in</button>
                <button className="button">My teachers</button>
                <button className="button">Personal settings</button>
                <button className="button">Contact us</button>
            </div>
        </div>
    )
}
export default ProfilePage;