import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { arrayUnion, doc, increment, setDoc, updateDoc, getDoc } from "firebase/firestore";
import { db, auth } from '../src/firebase/firebase'
import MainPage from './modules/mainPage/MainPage'
const AppContext = createContext();

export const AppProvider = ({children}) => {
    const Home = () => <MainPage/>
    const [teacherData, setTeacherData] = useState(['hi'])
        const departments = {'Art': ['Erica Baseggio', 'Sharon Finley', 'Rosalia Marzullo', 'Katheryn Garcia'], 'Computer Science': ['Luis Flores De Valgas'], 'Dual Language': ['Martin Bentley', 'Brian Boes', 'Anna Bronkowska', 'Nancy Campbell', 'Michael Cuellar', 'Ellen Damlich', 'Casey Fahnstrom', 'Melody Foley', 'Cheryl Graff', 'Hayley Kimbrue', 'Karen Krausen-Ferrer', 'David London', 'Kathleen Mahoney', 'Jess Miller', 'Cody Perenchio', 'Stephanie Righeimer', 'John Schlotfelt', 'James Thorson', 'Jorge Vargas', 'Michael Vonder Haar', 'Brian Wittenwyler'], 'English': ['Rachel Allmen', 'Vaughn Camacho', 'Yesenia Correa', 'Rachel Davidson', 'Elena Esman', 'Gabriella Frate', 'Justine Hunter', 'Linda Kim', 'Tina Mah', 'Nicholas Quinones', 'John Talley', 'Gregory Vecchio'], 'Math': ['John Brown', 'Stephen Cimaglia', 'Ryan Dant', 'Michael Lis', 'Georgian Mihoc', 'Diamond Montana', 'Peter Smith', 'Jordan Stein', 'Ryan Tamburello', 'Brian Tran', 'Erin Unander', 'John Wylie'], 'Music': ['Brett Benge', 'Anne Gallery', 'Puja Ramaswamy'], 'Physical Education': ['Shannon Gilfillan', 'Audrey Haderlein', 'Sergio Macias', 'Jessica Mojica', 'Abamwesiga Mutayoba', 'John Neal', 'Katherine Thiele'], 'Science': ['Mahesh Alur', 'Andrzej Barski', 'Anthony Carlsen', 'Vyjayanti Joshi', 'Alyssa Martin', 'Theo Pinson', 'Jessin Simon', 'Haley Whelan', 'Melissa Zagorski'], 'Social Studies': ['Daniel Bender', 'Nora Buganski', 'Theresa Darnell', 'Brian Fehr', 'Kristin Hu', 'Aidan Price', 'Anna Proni', 'David Roberts', 'Brian Ruiz', 'Jasmine Santiago', 'Si Squires-Kasten'], 'World Language': ['Alicia Acosta', 'Marissa Cavallini', 'Santiago De Fazio', 'Nohemi Rivera-Suarez', 'Valerie Wadycki']}
        const [teachers, setTeachers] = useState([])
        const [currentTeacher, setCurrentTeacher] = useState([])
        const [isLoggenIn, setIsLoggedIn] = useState(false)
        const [currentUser, setCurrentUser] = useState('')
        const [ratingTrigger, setRatingTrigger] = useState(false)
        const [filteredTeachers, setFilteredTeachers] = useState(teachers);
      useEffect(() => {

        const fetchTeachers = async () => {
          try {
              console.log('fetchTeachers has been called');
      
              const teacherPromises = Object.entries(departments).flatMap(([department, teacherNames]) =>
                  teacherNames.map(async (name) => {
                      try {
                          const teacherRef = doc(db, "teachers", name);
                          const teacherDoc = await getDoc(teacherRef);
      
                          if (!teacherDoc.exists()) {
                              console.error(`Teacher ${name} does not exist`);
                              return null; // Return null instead of throwing an error
                          }
      
                          const teacherData = teacherDoc.data();
      
                          return {
                              name,
                              rating: teacherData.rating ? teacherData.rating.toFixed(1) : 0,
                              phones: teacherData.phones || {},
                              difficulty: teacherData.difficulty || {},
                              schoolDepartment: department,
                          };
                      } catch (error) {
                          console.error(`Error fetching teacher ${name}:`, error);
                          return null; // Ensure the function continues
                      }
                  })
              );
      
              const teacherResults = await Promise.all(teacherPromises);
              
              // Remove any null values caused by errors
              const filteredResults = teacherResults.filter(Boolean);
      
              // Map through the teachers and add image info
              const teachersWithImages = filteredResults.map(teacher => {
                  const imageName = teacher.name.replace(/\s+/g, '_') + '.jpg';
                  return { ...teacher, image: imageName };
              });
      
              // Update the state
              console.log('teachersWithImages before setting state:', teachersWithImages);
              setTeachers(teachersWithImages);
              setFilteredTeachers(teachersWithImages);
              console.log('teachersWithImages after setting state:', teachersWithImages);
              
          } catch (error) {
              console.error('fetchTeachers error:', error);
          }
      };
        fetchTeachers();
        console.log('fetch teachers finished', filteredTeachers);
        

    }, [ratingTrigger]); // Add teachers as a dependency to avoid multiple updates


    useEffect(() => {
      console.log('updated the teachers again', filteredTeachers);
    }, [filteredTeachers])


    useEffect(() => {
      if(currentTeacher && !Array.isArray(currentTeacher)){
        localStorage.setItem("selectedTeacher", JSON.stringify(currentTeacher));
        console.log('setting the teacher to be:', localStorage.getItem('selectedTeacher')); 
      }           
  }, [currentTeacher]);
  
  // Load teacher on page refresh
  useEffect(() => {
      const storedTeacher = localStorage.getItem("selectedTeacher");
      if (storedTeacher) {
          setCurrentTeacher(JSON.parse(storedTeacher));
          console.log('loading on page refresh: ', localStorage.getItem('selectedTeacher'));
      }
  }, []);


    return(
        <AppContext.Provider value={{teacherData, setTeacherData, Home, teachers, currentTeacher, setCurrentTeacher, isLoggenIn, setIsLoggedIn, currentUser, setCurrentUser, ratingTrigger, setRatingTrigger, filteredTeachers, setFilteredTeachers}}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext);
}