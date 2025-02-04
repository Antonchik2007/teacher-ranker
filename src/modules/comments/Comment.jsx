import React, { useEffect, useState } from "react";
import { Card, Col } from 'react-bootstrap';
import './Comment.css'

const Comment = ({text, author}) => {

    
    
    return(
        
        <Col md={6} className="comment-outer-wrapper">
            <Card className="comment-wrapper">
            <div className="comment-header"><p></p><div className="comment-date">01/03/2025</div></div>
            <div className="comment-content">{text}</div>
            </Card>
        </Col>
        
    )
}

export default Comment;