import React, {useState, useEffect, useRef} from "react";
import './Comments.css'
import Comment from './Comment.jsx'
import {Row, Container } from 'react-bootstrap';
import { db } from "../../firebase/firebase.js";
import { getDoc, doc } from "firebase/firestore";
import { useAppContext } from "../../AppContext.jsx";
import ModalRate from "../teacherDetails/ModalRate.jsx";


const Comments = () => {
    const [comments, setComments] = useState([])
    const {currentTeacher, setCurrentTeacher} = useAppContext()
    const isFirstRender = useRef(true)
    useEffect(() => {
        const commentText = async () => {
            const teacherObj = doc(db, 'teachers', currentTeacher.name)
    
            try{
                const docSnap = await getDoc(teacherObj)
                if(docSnap.exists()){
                    const teacher = docSnap.data()
                    if(Array.isArray(teacher['comments'])){
                        console.log('Fetched comments: ',comments);
                        setComments(teacher.comments)
                        
                    }
                }
            }catch(e){
                console.log(e.message);        
            }
        }   
        if(currentTeacher && !Array.isArray(currentTeacher)){
            commentText();
            console.log(comments);
        }
        
    }, [currentTeacher])
    
    return(
        <div className="comments-wrapper">
            <div className="wrapper">     
            <div className="leave-comment-button"><ModalRate customButton={'Leave a comment'}/></div>
            </div>
            <Container>
                <Row className="comments-row">
                    {comments.length > 0 ? (comments.map((comment, index) => {
                        return <Comment key={index} text={comment?.text} author={comment?.author} date={comment?.date}/>
                    })) 
                    : 
                    (<p>...loading comments</p>)}
                </Row>
            </Container>
        </div>
    )
}

export default Comments;