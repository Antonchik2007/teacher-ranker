import React from "react";
import './teacherCard.css'
import { Card, Col } from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Link } from 'react-router-dom';

const TeacherCard = ({teacher}) => {
    

    return(
        <Col md={6}>
        <Card>
            <div className="info name">{teacher.name}</div>
            <div className="info class"><p>Class: </p>{teacher.schoolClass}</div>
            <div className="info rating"><p>Rating: </p>{teacher.rating}</div>
            <div className="info details"><Link to='/teacher-details' className="link">View details</Link></div>
            <div className="info rate"><p>Rate</p></div>
        </Card>
        </Col>
    )
}

export default TeacherCard;