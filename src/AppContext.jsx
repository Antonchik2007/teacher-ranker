import React, { createContext, useContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainPage from './modules/mainPage/MainPage'
const AppContext = createContext();

export const AppProvider = ({children}) => {
    const Home = () => <MainPage/>
    const [teacherData, setTeacherData] = useState(['hi'])
        const departments = {'Art': ['Erica Baseggio', 'Sharon Finley', 'Rosalia Marzullo', 'Katheryn Garcia'], 'Computer Science': ['Luis Flores De Valgas'], 'Dual Language': ['Martin Bentley', 'Brian Boes', 'Anna Bronkowska', 'Nancy Campbell', 'Michael Cuellar', 'Ellen Damlich', 'Casey Fahnstrom', 'Melody Foley', 'Cheryl Graff', 'Hayley Kimbrue', 'Karen Krausen-Ferrer', 'David London', 'Kathleen Mahoney', 'Jess Miller', 'Cody Perenchio', 'Stephanie Righeimer', 'John Schlotfelt', 'James Thorson', 'Jorge Vargas', 'Michael Vonder Haar', 'Brian Wittenwyler'], 'English': ['Rachel Allmen', 'Vaughn Camacho', 'Yesenia Correa', 'Rachel Davidson', 'Elena Esman', 'Gabriella Frate', 'Justine Hunter', 'Linda Kim', 'Tina Mah', 'Nicholas Quinones', 'John Talley', 'Gregory Vecchio'], 'Math': ['John Brown', 'Stephen Cimaglia', 'Ryan Dant', 'Michael Lis', 'Georgian Mihoc', 'Diamond Montana', 'Peter Smith', 'Jordan Stein', 'Ryan Tamburello', 'Brian Tran', 'Erin Unander', 'John Wylie'], 'Music': ['Brett Benge', 'Anne Gallery', 'Puja Ramaswamy'], 'Physical Education': ['Shannon Gilfillan', 'Audrey Haderlein', 'Sergio Macias', 'Jessica Mojica', 'Abamwesiga Mutayoba', 'John Neal', 'Katherine Thiele'], 'Science': ['Mahesh Alur', 'Andrzej Barski', 'Anthony Carlsen', 'Vyjayanti Joshi', 'Alyssa Martin', 'Theo Pinson', 'Jessin Simon', 'Haley Whelan', 'Melissa Zagorski'], 'Social Studies': ['Daniel Bender', 'Nora Buganski', 'Theresa Darnell', 'Brian Fehr', 'Kristin Hu', 'Aidan Price', 'Anna Proni', 'David Roberts', 'Brian Ruiz', 'Jasmine Santiago', 'Si Squires-Kasten'], 'World Language': ['Alicia Acosta', 'Marissa Cavallini', 'Santiago De Fazio', 'Nohemi Rivera-Suarez', 'Valerie Wadycki']}
        const [teachers, setTeachers] = useState([])
        const [currentTeacher, setCurrentTeacher] = useState(teachers)
        const [isLoggenIn, setIsLoggedIn] = useState(false)
        const [currentUser, setCurrentUser] = useState('')
      useEffect(() => {
        // Check if the teachers data is already set to avoid re-renders
        if (teachers.length > 0) return; // Prevent unnecessary re-renders

        // Prepare teachers data
        const teachersJS = [];
        for (const [department, teacherNames] of Object.entries(departments)) {
            teacherNames.forEach(name => {
                teachersJS.push({
                    name,
                    rating: 0, // Default rating
                    schoolDepartment: department,
                });
            });
        }

        // Map through the teachers and add image info
        const teachersWithImages = teachersJS.map(teacher => {
            // Format image name to replace spaces with underscores and append ".jpg"
            const imageName = teacher.name.replace(/\s+/g, '_') + '.jpg';
            return { ...teacher, image: imageName };
        });

        // Update the state with the teachers data (only once)
        setTeachers(teachersWithImages);
    }, [teachers]); // Add teachers as a dependency to avoid multiple updates
    return(
        <AppContext.Provider value={{teacherData, setTeacherData, Home, teachers, currentTeacher, setCurrentTeacher, isLoggenIn, setIsLoggedIn, currentUser, setCurrentUser}}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext);
}