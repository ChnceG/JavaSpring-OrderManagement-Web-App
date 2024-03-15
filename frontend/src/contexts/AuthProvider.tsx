import React, { createContext, useState } from 'react';

interface AuthProviderProps {
    children: React.ReactNode;
}

interface AuthContextType {
    authenticated: boolean;
    login: () => void;
    logout: () => void;
}
  
const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);
  
    const login = () => {
        setAuthenticated(true);
    };

    const logout = () => {
        setAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ authenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };