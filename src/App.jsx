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
