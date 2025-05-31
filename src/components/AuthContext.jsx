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
        checkSessionTheme();
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

    const checkSessionTheme = () => {
        let themeSession = localStorage.getItem('theme');
        if (themeSession != null && themeSession != undefined && themeSession != '') {
            localStorage.setItem('theme', `${themeSession}`); 
            setTheme(themeSession);
            return;
        }
        localStorage.setItem('theme', `light`); 
    }

    const changeTheme = () => {
        let themeSession = localStorage.getItem('theme') === 'light' ? 'dark' : 'light';
        if (themeSession!=null && themeSession!=undefined && themeSession!='') {
            localStorage.setItem('theme', `${themeSession}`); 
            setTheme(themeSession);
            return;
        }
    }

    const logout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('theme');
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