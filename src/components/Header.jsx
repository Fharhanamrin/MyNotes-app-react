import { Navigate, NavLink, useNavigate } from "react-router";
import { useAuth } from '../components/AuthContext';
import { useEffect, useState } from "react";



function Header() {
    const { logout, changeTheme, theme } = useAuth();
    
    const navigate = useNavigate();
    
    const [ThemeLocal, setThemeLocal] = useState('light');


    useEffect(() => {
        checkSessionTheme();
    }, [theme]);

    const checkSessionTheme = () => {
        let themeSession = localStorage.getItem('theme');
        if (themeSession != null && themeSession != undefined && themeSession != '') {
            localStorage.setItem('theme', `${themeSession}`);
            setThemeLocal(themeSession);
            return;
        }
        localStorage.setItem('theme', `light`);
    }
    

    
    const clickLogout = () => {
        logout();
        navigate('/login');
    }

    const clickChangeTheme = () => {
        changeTheme()
    }
    return (
        <div className="header">
            <NavLink to={`/`}><h1 className={`header-title-${ThemeLocal}`}>MyNotes Aktif</h1></NavLink>
            <NavLink to={`/unarchive`}><h1 className={`header-title-${ThemeLocal}`}>MyNotes Tidak Aktif</h1></NavLink>
            <button onClick={clickLogout}>Logout</button>
            <button 
                onClick={() => {
                    clickChangeTheme();
                }}
                className="theme-toggle"
            >
                {theme == "light" ? 'LIGHT 🌞' : 'NIGHT 🌙'}
            </button>
        </div>
    )
}

export default Header;