import SearchBar from "./SearchBar";
function Header() {
    return (
        <div className="header">
            <h1 className="header-title">MyNotes</h1>
            <SearchBar />
        </div>
    )
}

export default Header;