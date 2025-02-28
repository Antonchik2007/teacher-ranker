import './App.css';
import LogIn from './modules/authentification/LogIn';
import Header from './modules/header/Header';
import MainPage from './modules/mainPage/MainPage';
import ProfilePage from './modules/profilePage/ProfilePage';
import Comments from './modules/comments/Comments.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import TeacherDetails from './modules/teacherDetails/TeacherDetails';
import { useEffect } from 'react';
function App() {

  useEffect(() => {
    const setFixedHeight = () => {
      const vh = window.innerHeight * 0.01;  // 1% of the viewport height
      document.documentElement.style.setProperty('--vh', `${vh * 100}px`);  // Set the fixed height as a custom property
    };

    // Call this on page load to set the fixed height
    window.addEventListener('load', setFixedHeight);


    // Cleanup the event listeners when the component is unmounted
    return () => {
      window.removeEventListener('load', setFixedHeight);
    };
    
  }, []);
  useEffect(() => {
    const setFixedWidth = () => {
      const vw = window.innerWidth * 0.01;  // 1% of the viewport height
      document.documentElement.style.setProperty('--vw', `${vw * 100}px`);  // Set the fixed height as a custom property
    };

    // Call this on page load to set the fixed height
    window.addEventListener('load', setFixedWidth);


    // Cleanup the event listeners when the component is unmounted
    return () => {
      window.removeEventListener('load', setFixedWidth);
    };
  }, [])

  return (
    <BrowserRouter>
      <div className="app-wrapper">
      <Header/>
      <div className="page-content">
          <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/profile" element={<ProfilePage />}/>
            <Route path='/logIn' element={<LogIn/>}/>
            <Route path='/teacher-details' element={<TeacherDetails/>}/>
            <Route path='/teacher-details/teacher-comments' element={<Comments/>}/>
          </Routes>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
