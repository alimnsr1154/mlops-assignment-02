// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import SuccessScreen from './components/SuccessScreen';

const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/forgot-password" element={<ForgotPasswordForm />} />
            <Route path="/success" element={<SuccessScreen />} />
            {/* Add more routes here as needed */}
        </Routes>
    </Router>
);

export default AppRoutes;
