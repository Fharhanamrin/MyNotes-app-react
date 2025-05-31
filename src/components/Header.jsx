import { Navigate, NavLink, useNavigate } from "react-router";
import { useAuth } from '../components/AuthContext';



function Header() {
    const { logout, changeTheme, theme } = useAuth();
    
    const navigate = useNavigate();

    
    const clickLogout = () => {
        logout();
        navigate('/login');
    }

    const clickChangeTheme = () => {
        changeTheme()
    }
    return (
        <div className="header">
            <NavLink to={`/`}><h1 className={`header-title-${theme}`}>MyNotes Aktif</h1></NavLink>
            <NavLink to={`/unarchive`}><h1 className={`header-title-${theme}`}>MyNotes Tidak Aktif</h1></NavLink>
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