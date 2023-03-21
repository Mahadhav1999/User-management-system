import React from 'react';
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom';
import LandingPage from './components/Pages/LandingPage';
import AdminLogin from './components/auth/AdminLogin';
import UserLogin from './components/auth/UserLogin';
import UserHome from './components/Pages/Users/UserHome';

function App() {
    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage/>} />
                <Route path="/auth/admin/login" element={<AdminLogin/>} />
                <Route path="/auth/user/login" element={<UserLogin/>} />
                <Route path='/*' element ={<UserHome/>} />
            </Routes>
        </Router>
        </>
    );
}

export default App;