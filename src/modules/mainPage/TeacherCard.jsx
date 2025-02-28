import React from "react";
import './teacherCard.css'
import { Card, Col } from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Link } from 'react-router-dom';
import ModalRate from '../teacherDetails/ModalRate'
import { useAppContext } from "../../AppContext";
const TeacherCard = ({teacher}) => {
    const {setCurrentTeacher, isLoggenIn} = useAppContext()
    
    return(
        <Col md={6}>
        <Card>
            <div className="info name">{teacher.name}</div>
            <div className="info profile-picture" ><img src={`/downloaded_images/${teacher.image}`} alt={`${teacher.name}'s image`} /></div>
            <div className="info class"><p>Department: </p>{teacher.schoolDepartment}</div>
            <div className="info rating"><p>Rating: </p><p className="rating-amount">{teacher.rating} ({teacher.ratingAmount})</p></div>
            <div className="teacher-buttons-wrapper">
                <Link to='/teacher-details' className="info details" onClick={() => setCurrentTeacher(teacher)}>View details</Link>
                <ModalRate customButton={ <div className="info rate" onClick={() => setCurrentTeacher(teacher)}> <p>Rate</p></div>}/>
            </div>
            
        </Card>
        </Col>
    )
}

export default TeacherCard;