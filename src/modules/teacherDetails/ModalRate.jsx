import React, {useState} from "react";
import './ModalRate.css'
import {Modal} from 'react-bootstrap'

const ModalRate = ({customButton}) => {
    const [show, setShow] = useState(false);
    const [selectedDifficultyIndex, setSelectedDifficultyIndex] = useState(null)
    const [selectedPhoneIndex, setSelectedPhoneIndex] = useState(null)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const difficultyRating = [1, 2, 3, 4, 5]
    const phoneUsage = ['Yes', 'No', 'Sometimes']

    const handleClickSelect = (index, category) => {
      switch(category){

      case 'difficulty':
        setSelectedDifficultyIndex(index)
        break;
      case 'phone':
        setSelectedPhoneIndex(index)
        break
      }
    }
    return(
        <div className="modal-wrapper">
           <div className="" onClick={handleShow}>{customButton ? customButton : <div className="modal-button" onClick={handleShow}>Rate</div>}</div> 

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Rank</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-teacher-header">
            <p className="modal-teacher-title">Ms Simon</p>
            <p className="modal-teacher-class">Class: Physics</p>
          </div>
            <p className="modal-teacher-rating">Rating:  3 starts</p>
            <p className="modal-teacher-phone">Cell phone usage:</p>
            <div className="modal-teacher-phone-choice">
              {phoneUsage.map((option, index) => {
                return <p key={index} onClick={() => handleClickSelect(index, 'phone')} className={selectedPhoneIndex === index ? `modal-phone-${option} modal-phone-active`: `modal-phone-${option}`}>{option}</p>
              })}
            </div>
          <p className="modal-class-difficulty">Class difficulty: </p>
          <div className="modal-class-difficulty-ratings">
            {difficultyRating.map((rating, index) => {
              return <p key={index} onClick={() => handleClickSelect(index, 'difficulty')} className={selectedDifficultyIndex === index? 'class-difficulty-rating difficulty-rating-active' : "class-difficulty-rating"}>{rating}</p>
            })}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="modal-button">Submit</button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default ModalRate;