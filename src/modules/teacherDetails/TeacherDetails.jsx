import React from "react";
import './TeacherDetails.css'
import {Link } from 'react-router-dom';
import ModalRate from "./ModalRate";
const TeacherDetails = () => {

    return(
        <div className="details-wrapper">
            <div className="teacher-header">
                <p className="teacher-header-text teahcher-name">Teacher: Ms Simon</p>
                <p className="teacher-header-text techer-class">Class: Physics</p>
                <p className="teacher-header-text teacher-rating">Rating: 2.3</p>
            </div>
            <div className="phone-info">
                <p className="report-text-title">Phone allowance - student reports:</p>
                <p className="report-text allowed">10 students reported: Allowed</p>
                <p className="report-text somewhat-allowed">7 Not allowed, but can kinda be used</p>
                <p className="report-text not-allowed">5 Not allowed, very hard to use</p>
            </div>
            <div className="difficulty-info">
                <p className="difficulty-text difficulty-title">Class difficulty - student reports:</p>
                <p className="difficulty-text very-easy">10 students reported: Very easy</p>
                <p className="difficulty-text easy">7 students reported: Easy</p>
                <p className="difficulty-text medium">7 students reported: Medium</p>
                <p className="difficulty-text hard">5 students reported: Hard</p>
                <p className="difficulty-text very-hard">5 students reported: Very hard</p>
            </div>
            <div className="asses-buttons">
                <ModalRate/>
                <Link to='/teacher-details/teacher-comments'><button className="asses-button comment-button">View comments</button></Link>
            </div>
        </div>
    )
}

export default TeacherDetails;