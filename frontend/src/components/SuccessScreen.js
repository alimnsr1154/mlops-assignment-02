// src/components/SuccessScreen.js
import React from 'react';
import { Link } from 'react-router-dom';

const SuccessScreen = () => {
    return (
        <div>
            <h2>Welcome!</h2>
            <p>You have successfully logged in or registered.</p>
            <Link to="/">Go to Login</Link>
        </div>
    );
};

export default SuccessScreen;
