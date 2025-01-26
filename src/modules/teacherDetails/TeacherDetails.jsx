import React from "react";
import './TeacherDetails.css'
import {Link } from 'react-router-dom';
import ModalRate from "./ModalRate";
import { useAppContext } from "../../AppContext";
const TeacherDetails = () => {
        const currentTeacher = useAppContext().currentTeacher;
    return(
        <div className="details-wrapper">
            <div className="teacher-header">
                <p className="teacher-header-text teahcher-name">{currentTeacher.name}</p>
                <p className="teacher-header-text techer-class">Department: {currentTeacher.schoolDepartment}</p>
                <p className="teacher-header-text teacher-rating">Rating: {currentTeacher.rating}</p>
            </div>
            <div className="phone-info">
                <p className="report-text-title">Phone allowance - student reports:</p>
                <p className="report-text allowed">10 reported: Allowed</p>
                <p className="report-text somewhat-allowed">7 reported: Can kinda be used</p>
                <p className="report-text not-allowed">5 reported: Not allowed, very hard to use</p>
            </div>
            <div className="difficulty-info">
                <p className="difficulty-text difficulty-title">Class difficulty - student reports:</p>
                <p className="difficulty-text very-easy">10 reported: Very easy</p>
                <p className="difficulty-text easy">7 reported: Easy</p>
                <p className="difficulty-text medium">7 reported: Medium</p>
                <p className="difficulty-text hard">5 reported: Hard</p>
                <p className="difficulty-text very-hard">5 reported: Very hard</p>
            </div>
            <div className="asses-buttons">
                <ModalRate/>
                <Link to='/teacher-details/teacher-comments'><button className="asses-button comment-button">View comments</button></Link>
            </div>
        </div>
    )
}

export default TeacherDetails;