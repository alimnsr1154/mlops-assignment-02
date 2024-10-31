// src/services/authService.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const authService = {
    login: async (data) => {
        const response = await axios.post(`${API_URL}/login`, data);
        localStorage.setItem('token', response.data.token);
        return response.data;
    },

    signup: async (data) => {
        const response = await axios.post(`${API_URL}/signup`, data);
        return response.data;
    },

    forgotPassword: async (data) => {
        const response = await axios.post(`${API_URL}/forgot-password`, data);
        return response.data;
    },

    logout: () => {
        localStorage.removeItem('token');
    },
};

export default authService;
