import React from "react";
import { Card, Col } from 'react-bootstrap';
import './Comment.css'
const Comment = () => {

    return(
        <Col md={6} className="comment-outer-wrapper">
            <Card className="comment-wrapper">
            Hello
            </Card>
        </Col>
    )
}

export default Comment;