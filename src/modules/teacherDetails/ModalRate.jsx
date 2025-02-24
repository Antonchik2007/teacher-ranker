import React, {useEffect, useState} from "react";
import './ModalRate.css'
import {Modal} from 'react-bootstrap'
import { useAppContext } from "../../AppContext";
import { Timestamp } from "firebase/firestore";
import { arrayUnion, doc, increment, setDoc, updateDoc, getDoc } from "firebase/firestore";
import { db, auth } from '../../firebase/firebase'

const ModalRate = ({customButton}) => {
    const [show, setShow] = useState(false);
    const [selectedDifficultyIndex, setSelectedDifficultyIndex] = useState(null)
    const [selectedPhoneIndex, setSelectedPhoneIndex] = useState(null)
    const [selectedRatingIndex, setSelectedRatingIndex] = useState(null)
    const handleClose = () => {
      setSelectedDifficultyIndex(null)
      setSelectedPhoneIndex(null)
      setSelectedRatingIndex(null)
      setShow(false);
    }
    const handleShow = () => {
      if(!isLoggenIn){
        alert('Please log in order to rate')
      }else{
        setShow(true);
      }
    }
    const difficultyRating = [1, 2, 3, 4, 5]
    const phoneUsage = ['Yes', 'No', 'Sometimes']
    const [commentInput, setCommentInput] = useState('')
    const {currentTeacher, currentUser, setCurrentUser, isLoggenIn, ratingTrigger, setRatingTrigger} = useAppContext()
    const [ratedTeachers, setRatedTeachers] = useState([]);

    const difficultyMapping = {
      1: "difficulty.veryEasy",
      2: "difficulty.easy",
      3: "difficulty.medium",
      4: "difficulty.hard",
      5: "difficulty.veryHard"
    };
    const phoneMapping = {
      1: "phones.phoneYes",
      2: "phones.phoneNo",
      3: "phones.phoneMaybe",
    };

    const handleClickSelect = (index, category) => {
      switch(category){
      case 'difficulty':
        setSelectedDifficultyIndex(index)
        break;
      case 'phone':
        setSelectedPhoneIndex(index)
        break
      case 'rating':
        setSelectedRatingIndex(index)
        break
      }
    }

    //function to get the teachers that the user has already rated
    useEffect(() => {
      const fetchUserData = async () => {

        if (!currentUser) return;
        
        try {
            const userRef = doc(db, "users", currentUser.uid);
            const userSnap = await getDoc(userRef);
  
            if (userSnap.exists()) {
                setRatedTeachers(userSnap.data().ratedTeachers || []);           
            } else {
                console.log("User document does not exist in Firestore");
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
      };
      fetchUserData();
    }, [currentTeacher, currentUser])
    const handleSubmit = async () => {

      if(selectedDifficultyIndex === null || selectedPhoneIndex === null || selectedRatingIndex === null){
        alert('Please select all fields');
        return;
      }
      if(ratedTeachers.map(teacher => teacher.teacher).includes(currentTeacher.name)){
        alert('You have already rated this teacher')
        return;
      }
      try {
        const difficultyToUpdate = difficultyMapping[selectedDifficultyIndex + 1];
        const phoneToUpdate = phoneMapping[selectedPhoneIndex + 1];
    
        setCurrentUser(auth.currentUser);
    
        // **1. Update user's ratedTeachers**
        await updateDoc(doc(db, "users", currentUser.uid), {
          ratedTeachers: arrayUnion({
            teacher: currentTeacher.name,
            phone: phoneUsage[selectedPhoneIndex],
            difficulty: selectedDifficultyIndex + 1,
            rating: selectedRatingIndex + 1,
            comment: commentInput
          })
        });
    
        // **2. Get the latest teacher data first**
        const teacherRef = doc(db, "teachers", currentTeacher.name);
        const teacherDoc = await getDoc(teacherRef);
    
        if (!teacherDoc.exists()) throw new Error("Teacher does not exist");
    
        const teacherData = teacherDoc.data();
        const newRatingAmount = (teacherData.ratingAmount || 0) + 1;
        const newRatingTotal = (teacherData.ratingTotal || 0) + (selectedRatingIndex + 1);
        const newRating = newRatingTotal / newRatingAmount; // Manually calculate new rating
    
        // **3. Update teacher's ratings and comments**
        await updateDoc(teacherRef, {
          comments: arrayUnion({ text: commentInput, author: currentUser.uid, date: Timestamp.now() }),
          ratingAmount: increment(1),
          ratingTotal: increment(selectedRatingIndex + 1),
          rating: newRating, // Manually computed correct value
          [difficultyToUpdate]: increment(1),
          [phoneToUpdate]: increment(1)
        });
    
        alert("The teachers has been rated successfully!");
        setRatingTrigger(prev => !prev)
        console.log('The trigger has been sent', ratingTrigger);
        
        setSelectedDifficultyIndex(null)
        setSelectedPhoneIndex(null)
        setSelectedRatingIndex(null)
        setShow(false);
      } catch (error) {
        console.error("Error updating rating:", error.message);
      }
    };
    return(
        <div className="modal-wrapper">
           <div className="" onClick={handleShow}>{customButton ? customButton : <div className="modal-button" onClick={handleShow}>Rate</div>}</div> 

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Rate</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-teacher-header">
            <p className="modal-teacher-title" onClick={() => console.log(currentUser.uid)}>{currentTeacher.name}</p>
            <p className="modal-teacher-class">Department: {currentTeacher.schoolDepartment}</p>
            <p className="modal-teacher-rating">Current rating: {currentTeacher.rating}</p>
          </div>
            <p className="modal-teacher-phone">Cell phone usage:</p>
            <div className="modal-teacher-phone-choice">
              {phoneUsage.map((option, index) => {
                return <p key={index} onClick={() => handleClickSelect(index, 'phone')} className={selectedPhoneIndex === index ? `modal-phone modal-phone-${option} modal-phone-active`: `modal-phone modal-phone-${option}`}>{option}</p>
              })}
            </div>
          <p className="modal-class-difficulty">Class difficulty: </p>
          <div className="modal-class-difficulty-ratings">
            {difficultyRating.map((rating, index) => {
              return <p key={index} onClick={() => handleClickSelect(index, 'difficulty')} className={selectedDifficultyIndex === index? 'class-difficulty-rating difficulty-rating-active' : "class-difficulty-rating"}>{rating}</p>
            })}
          </div>
          <p className="modal-selected-teacher-rating">Overall rating:</p>
          <div className="modal-class-difficulty-ratings">
            {difficultyRating.map((rating, index) => {
              return <p key={index} onClick={() => handleClickSelect(index, 'rating')} className={selectedRatingIndex === index? 'class-difficulty-rating difficulty-rating-active' : "class-difficulty-rating"}>{rating}</p>
            })}
          </div>
          <textarea className="modal-comment" placeholder="Type your comment" onChange={(e) => setCommentInput(e.target.value)}></textarea>
        </Modal.Body>
        <Modal.Footer>
          <button className="modal-button-footer" onClick={handleSubmit}>Submit</button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default ModalRate;