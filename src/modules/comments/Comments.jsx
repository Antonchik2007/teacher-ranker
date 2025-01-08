import React from "react";
import './Comment.css'
import Comment from './Comment.jsx'
import {Row, Container } from 'react-bootstrap';


const Comments = () => {

    return(
        <div className="comments-wrapper">
            <Container>
                <Row>
                    <Comment/>
                    <Comment/>
                </Row>
            </Container>
        </div>
    )
}

export default Comments;