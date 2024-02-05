import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './Page/HomePage.jsx';
import LoginPage from './Page/Auth/LoginPage.jsx';
import RegisterPage from './Page/Auth/RegisterPage.jsx';
import { ToastContainer, toast } from 'react-toastify';


function App() {
  return ( 
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>

      {/* alert notification for error and success message */}
      <ToastContainer />
      
    </BrowserRouter>
   );
}

export default App;