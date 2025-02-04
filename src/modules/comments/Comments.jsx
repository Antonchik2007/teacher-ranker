import React, {useState, useEffect} from "react";
import './Comments.css'
import Comment from './Comment.jsx'
import {Row, Container } from 'react-bootstrap';
import { db } from "../../firebase/firebase.js";
import { getDoc, doc } from "firebase/firestore";
import { useAppContext } from "../../AppContext.jsx";


const Comments = () => {
    const [comments, setComments] = useState([])
    const {currentTeacher, setCurrentTeacher} = useAppContext()
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
        commentText();
        console.log(comments);
    }, [])
    
    return(
        <div className="comments-wrapper">
            <div className="wrapper">
            <div className="leave-comment-button" onClick={() => console.log(comments)}>Leave a comment</div>
            </div>
            <Container>
                <Row className="comments-row">
                    {comments.length > 0 ? (comments.map((comment, index) => {
                        return <Comment key={index} text={comment?.text} author={comment?.author}/>
                    })) 
                    : 
                    (<p>...loading</p>)}
                </Row>
            </Container>
        </div>
    )
}

export default Comments;