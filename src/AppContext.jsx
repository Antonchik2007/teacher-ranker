import React, { createContext, useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainPage from './modules/mainPage/MainPage'
const AppContext = createContext();

export const AppProvider = ({children}) => {
    const Home = () => <MainPage/>
    const [teacherData, setTeacherData] = useState([
        {
            name: 'John Does',
            schoolClass: 'Math',
            rating: 4.5,
            details: 'some url'
        },
        {
            name: 'John Does',
            schoolClass: 'Math',
            rating: 4.5,
            details: 'some url'
        },
        {
            name: 'John Does',
            schoolClass: 'Math',
            rating: 4.5,
            details: 'some url'
        },
        {
            name: 'John Does',
            schoolClass: 'Math',
            rating: 4.5,
            details: 'some url'
        },
        {
            name: 'John Does',
            schoolClass: 'Math',
            rating: 4.5,
            details: 'some url'
        },
        {
            name: 'John Does',
            schoolClass: 'Math',
            rating: 4.5,
            details: 'some url'
        },
        {
            name: 'John Does',
            schoolClass: 'Math',
            rating: 4.5,
            details: 'some url'
        },
        {
            name: 'John Does',
            schoolClass: 'Math',
            rating: 4.5,
            details: 'some url'
        },
        {
            name: 'John Does',
            schoolClass: 'Math',
            rating: 4.5,
            details: 'some url'
        },
        {
            name: 'John Does',
            schoolClass: 'Math',
            rating: 4.5,
            details: 'some url'
        },
        {
            name: 'John Does',
            schoolClass: 'Math',
            rating: 4.5,
            details: 'some url'
        },
        {
            name: 'John Does',
            schoolClass: 'Math',
            rating: 4.5,
            details: 'some url'
        },
        {
            name: 'John Does',
            schoolClass: 'Math',
            rating: 4.5,
            details: 'some url'
        },
        {
            name: 'John Does',
            schoolClass: 'Math',
            rating: 4.5,
            details: 'some url'
        },
    ])

    return(
        <AppContext.Provider value={{teacherData, setTeacherData, Home}}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext);
}