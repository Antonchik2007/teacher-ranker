import React from "react";
import { Card, Col } from 'react-bootstrap';
import './Comment.css'
const Comment = () => {

    return(
        
        <Col md={6} className="comment-outer-wrapper">
            <Card className="comment-wrapper">
            <div className="comment-header">Anonymous <div className="comment-date">01/03/2025</div></div>
            <div className="comment-content">- This is a review for this teacher I really hate her skibidi dssdsd dsds</div>
            </Card>
        </Col>
        
    )
}

export default Comment;