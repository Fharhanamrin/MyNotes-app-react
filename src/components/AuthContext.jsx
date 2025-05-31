import { createContext, useContext, useState, useEffect } from 'react';
import { getAccessToken, getUserLogged } from '../utils/network-data';
import PropTypes from 'prop-types';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        checkAuthStatus();
    }, []);

    const checkAuthStatus = async () => {
        try {
            const token = getAccessToken();
            if (token) {
                let userLogin = await getUserLogged();
                if (!userLogin.error) {
                    setIsAuthenticated(true);
                    localStorage.setItem("idUserLogin",`${userLogin.data.id}`)
                }
            }
        } catch (error) {
            alert(`Internal Server Error ${error}`);
        } finally {
            setLoading(false);
        }
    };

    const changeTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', `newTheme`); 
        setTheme(newTheme);
    }

    const logout = () => {
        localStorage.removeItem('accessToken');
        setIsAuthenticated(false);
        setLoading(false);
    };

    const value = {
        isAuthenticated,
        logout,
        loading, checkAuthStatus, changeTheme, theme
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
}