import Header from "../components/Header";
import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";
import EmptyState from "../components/EmptyState";
import { getActiveNotes, addNote, unarchiveNote, archiveNote, deleteNote } from "../utils/network-data";
import React, { useState, useEffect } from "react";
import { useAuth } from "../components/AuthContext";
import { useNavigate } from "react-router";


const HomePage = () => {
    const [myList, setMyList] = useState([]);
    const [noteTitle, setNoteTitle] = useState('');
    const [noteContent, setNoteContent] = useState('');
    const [counter] = useState(50);
    const [remaining, setRemaining] = useState(50);
    const { isAuthenticated, loading, theme } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading && !isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated]);

    useEffect(() => {
    }, [theme]);

    useEffect(() => {
        DataMyListActive();
    }, []);

    const DataMyListActive = async () => {
        let response = await getActiveNotes();
        if (!response.error) {
            let idUserLogin = localStorage.getItem("idUserLogin");
            const data = response.data.filter(item => item.owner == idUserLogin);
            setMyList(data);
            return;
        }
    };

    const handleNoteTitleChange = (event) => {
        const remainingChars = counter - event.target.value.length;
        if (remainingChars < 0) {
            alert('Judul terlalu panjang');
            return;
        }
        setNoteTitle(event.target.value);
        setRemaining(remainingChars);
    };

    const handleNoteContentChange = (event) => {
        setNoteContent(event.target.value);
    };

    const handleDeleteNote = async (id) => {
        let removeItem = await deleteNote(id);
        if (!removeItem.error) {
            DataMyListActive();
        }
    };

    const handleArchiveNote = async(id) => {
       let archive = await archiveNote(id);
       if (!archive.error) {
        DataMyListActive();
       }
    };

    const handleUnarchiveNote = async(id) => {
       let unarchive = await unarchiveNote(id);
       if (!unarchive.error) {
        DataMyListActive();
       }
    };

    const handleSubmit = async(event) => {
        event.preventDefault();

        if (noteTitle === '') {
            alert('Judul tidak boleh kosong');
            return;
        }

        if (noteTitle.length > 50) {
            alert('Judul terlalu panjang');
            return;
        }

        if (noteContent === '') {
            alert('Isi Note tidak boleh kosong');
            return;
        }

       let newNote =  await addNote({
            title: noteTitle,
            body: noteContent
        });

        if (!newNote.error) {
            alert('Note berhasil ditambahkan');   
            setNoteTitle('');
            setNoteContent('');
            DataMyListActive();
        }
    };

    return (

        <div className={`my-notes-app-${theme}`}>
            <Header />
            <NoteForm
                noteTitle={noteTitle}
                noteContent={noteContent}
                remaining={remaining}
                counter={counter}
                handleSubmit={handleSubmit}
                handleNoteTitleChange={handleNoteTitleChange}
                handleNoteContentChange={handleNoteContentChange}
            />
            {myList.length === 0 && <EmptyState />}
            {myList.length > 0 && (
                <NoteList
                    mylist={myList}
                    handleDeleteNote={handleDeleteNote}
                    handleArchiveNote={handleArchiveNote}
                    handleUnarchiveNote={handleUnarchiveNote}
                />
            )}

        </div>

    );
};

export default HomePage;
