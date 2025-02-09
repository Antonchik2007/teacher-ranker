import React, { useEffect, useState } from "react";
import { useAppContext } from "../../AppContext";
import {Row, Container } from 'react-bootstrap';
import './mainPage.css'
import TeacherCard from "./TeacherCard";
import SearchBar from "./SearchBar";
const MainPage = () => {

    const {teachers, teacherData, filteredTeachers, setFilteredTeachers, ratingTrigger} = useAppContext()
    useEffect(() => {
        console.log(filteredTeachers);
        
    }, [ratingTrigger, filteredTeachers])

    return(
        <div className="main-page-wrapper">           
        <Container >
            <SearchBar teachers={teachers} setFilteredTeachers={setFilteredTeachers}/>
            <Row>
                    {filteredTeachers.map((teacher, index) => {
                       return <TeacherCard key={index} teacher={teacher}/>
                   })}
                
            </Row>
        </Container>
        </div>
    )
}
export default MainPage;