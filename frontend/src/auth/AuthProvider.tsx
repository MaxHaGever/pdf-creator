import React, { useState , useEffect } from 'react';
import { AuthContext } from './authContext'
import api from '../utils/api';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [token, setToken] = useState<string | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
            setIsAuthenticated(true);
        }
    }, []);

    const login = async (email: string, password: string): Promise<void> => {
        try {
            const response = await api.post('/login', { email, password });
            const { token } = response.data;
            localStorage.setItem('token', token);
            setToken(token);
            setIsAuthenticated(true);
        } catch (error) {
            throw new Error('Login failed');
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ token, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};
