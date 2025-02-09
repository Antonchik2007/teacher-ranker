import React from "react";
import { useAppContext } from "../../AppContext";
import {Row, Container } from 'react-bootstrap';
import './mainPage.css'
import TeacherCard from "./TeacherCard";
import SearchBar from "./SearchBar";
const MainPage = () => {

    const teacherData = useAppContext().teacherData;
    const teachers = useAppContext().teachers;
    return(
        <div className="main-page-wrapper">           
        <Container >
            <SearchBar/>
            <Row>
                    {teachers.map((teacher, index) => {
                       return <TeacherCard key={index} teacher={teacher}/>
                   })}
                
            </Row>
        </Container>
        </div>
    )
}
export default MainPage;