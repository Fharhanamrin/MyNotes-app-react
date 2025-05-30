import Header from "../components/Header";
import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";
import NoteListArchive from "../components/NoteListArchive";
import EmptyState from "../components/EmptyState";
import { getAllNotes, unarchiveNote, archiveNote, deleteNote } from "../utils/local-data";
import React, { useState, useEffect } from "react";

const HomePageUnArchice = () => {
    const [myList, setMyList] = useState([]);
    const [archivedCount, setArchivedCount] = useState(0);

    useEffect(() => {
        const data = getAllNotes();
        setMyList(data);
    }, []);

    useEffect(() => {
        const archived = myList.filter(note => note.archived).length;
        setArchivedCount(archived);
    }, [myList]);



    const handleDeleteNote = (id) => {
        deleteNote(id);
        const data = getAllNotes();
        setMyList(data);
    };

    const handleArchiveNote = (id) => {
        archiveNote(id);
        const data = getAllNotes();
        setMyList(data);
    };

    const handleUnarchiveNote = (id) => {
        unarchiveNote(id);
        const data = getAllNotes();
        setMyList(data);
      
    };

   


    return (
        <div className="my-notes-app">
            <Header />
            <div className="container">
                <h1 className='note-group'>Note List Archive</h1>
                {archivedCount === 0 && <EmptyState />}
                {archivedCount > 0 && (
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
