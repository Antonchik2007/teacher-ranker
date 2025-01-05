import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({children}) => {

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
        <AppContext.Provider value={{teacherData, setTeacherData}}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext);
}