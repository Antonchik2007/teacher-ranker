import React, {useState} from "react";
import './ModalRate.css'
import {Modal} from 'react-bootstrap'
import { useAppContext } from "../../AppContext";

const ModalRate = ({customButton}) => {
    const [show, setShow] = useState(false);
    const [selectedDifficultyIndex, setSelectedDifficultyIndex] = useState(null)
    const [selectedPhoneIndex, setSelectedPhoneIndex] = useState(null)
    const [selectedRatingIndex, setSelectedRatingIndex] = useState(null)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const difficultyRating = [1, 2, 3, 4, 5]
    const phoneUsage = ['Yes', 'No', 'Sometimes']
    const currentTeacher = useAppContext().currentTeacher;

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
    return(
        <div className="modal-wrapper">
           <div className="" onClick={handleShow}>{customButton ? customButton : <div className="modal-button" onClick={handleShow}>Rate</div>}</div> 

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Rate</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-teacher-header">
            <p className="modal-teacher-title">{currentTeacher.name}</p>
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
          <textarea className="modal-comment" placeholder="Type your comment"></textarea>
        </Modal.Body>
        <Modal.Footer>
          <button className="modal-button-footer">Submit</button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default ModalRate;