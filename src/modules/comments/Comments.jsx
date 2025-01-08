import React from "react";
import './Comments.css'
import Comment from './Comment.jsx'
import {Row, Container } from 'react-bootstrap';


const Comments = () => {

    return(
        <div className="comments-wrapper">
            <div className="wrapper">
            <div className="leave-comment-button">Leave a comment</div>
            </div>
            <Container>
                <Row className="comments-row">
                    <Comment/>
                    <Comment/>
                </Row>
            </Container>
        </div>
    )
}

export default Comments;