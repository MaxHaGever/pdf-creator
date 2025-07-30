import React, { createContext, useContext } from 'react';

interface AuthContextType {
    token: string | null;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType>({
    token: null,
    login: async () => {},
    logout: () => {},
    isAuthenticated: false,
});

export const useAuth = () => {
    return useContext(AuthContext);
};
