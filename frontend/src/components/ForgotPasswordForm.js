// src/components/ForgotPasswordForm.js
import React, { useState } from 'react';
import authService from '../services/authServices';

const ForgotPasswordForm = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            await authService.forgotPassword({ email });
            alert("Password reset link sent to your email!");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Forgot Password</h2>
            {error && <p>{error}</p>}
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <button type="submit">Send Reset Link</button>
        </form>
    );
};

export default ForgotPasswordForm;
