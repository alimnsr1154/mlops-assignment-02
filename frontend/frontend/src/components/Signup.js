// src/components/SignupForm.js
import React, { useState } from 'react';
import authService from '../services/authService';

const SignupForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            await authService.signup({ email, password });
            alert("Signup successful!");
            // Redirect to login page or home
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Signup</h2>
            {error && <p>{error}</p>}
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <button type="submit">Signup</button>
        </form>
    );
};

export default SignupForm;
