import { NavLink } from "react-router";

function Header() {
    return (
        <div className="header">
            <NavLink to={`/`}><h1 className="header-title">MyNotes</h1></NavLink>
            <NavLink to={`/unarchive`}><h1 className="header-title">MyNotes Tidak Aktif</h1></NavLink>
        </div>
    )
}

export default Header;