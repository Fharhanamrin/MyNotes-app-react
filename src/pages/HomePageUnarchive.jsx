import Header from "../components/Header";
import NoteListArchive from "../components/NoteListArchive";
import EmptyState from "../components/EmptyState";
import { getArchivedNotes, unarchiveNote, archiveNote, deleteNote } from "../utils/network-data";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../components/AuthContext";

const HomePageUnArchice = () => {
    const [myList, setMyList] = useState([]);
    const { isAuthenticated, loading, theme } = useAuth();
    const navigate = useNavigate();
    const [ThemeLocal, setThemeLocal] = useState('light');


    useEffect(() => {
        if (!loading && !isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated]);



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



    useEffect(() => {
        DataMyListActive();
    }, []);

    const DataMyListActive = async () => {
        let response = await getArchivedNotes();
        if (!response.error) {
            let idUserLogin = localStorage.getItem("idUserLogin");
            const data = response.data.filter(item => item.owner == idUserLogin);
            setMyList(data);
            return;
        }
    };




    const handleDeleteNote = async (id) => {
        let remove = await deleteNote(id);
        if (!remove.error) {
            DataMyListActive();
        }
    };

    const handleArchiveNote = async (id) => {
        let archive = await archiveNote(id);
        if (!archive.error) {
            DataMyListActive();
        }
    };

    const handleUnarchiveNote = async (id) => {
        let unarchive = await unarchiveNote(id);
        if (!unarchive.error) {
            DataMyListActive();
        }
    };

    return (
        <div className={`my-notes-app-${ThemeLocal}`}>
            <Header />
            <div className="container">
                <h1 className='note-group'>Note List Archive</h1>
                {myList.length === 0 && <EmptyState />}
                {myList.length > 0 && (
                    <NoteListArchive
                        mylist={myList}
                        handleDeleteNote={handleDeleteNote}
                        handleArchiveNote={handleArchiveNote}
                        handleUnarchiveNote={handleUnarchiveNote}
                    />
                )}
            </div>
        </div>
    );
};

export default HomePageUnArchice;
