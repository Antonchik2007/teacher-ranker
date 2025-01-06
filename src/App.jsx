import './App.css';
import LogIn from './modules/authentification/LogIn';
import Header from './modules/header/Header';
import MainPage from './modules/mainPage/MainPage';
import ProfilePage from './modules/profilePage/ProfilePage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
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
          </Routes>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
