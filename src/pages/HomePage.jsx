import Header from "../components/Header";
import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";
import NoteListArchive from "../components/NoteListArchive";
import EmptyState from "../components/EmptyState";
import { getAllNotes, addNote, unarchiveNote, archiveNote } from "../utils/local-data";
import React, { useState, useEffect } from "react";

const HomePage = () => {
    const [myList, setMyList] = useState([]);
    const [noteTitle, setNoteTitle] = useState('');
    const [noteContent, setNoteContent] = useState('');
    const [counter] = useState(50);
    const [remaining, setRemaining] = useState(50);
    const [archivedCount, setArchivedCount] = useState(0);
    const [unarchivedCount, setUnarchivedCount] = useState(0);

    useEffect(() => {
        const data = getAllNotes();
        setMyList(data);
    }, []);

    useEffect(() => {
        const archived = myList.filter(note => note.archived).length;
        const unarchived = myList.filter(note => !note.archived).length;
        setArchivedCount(archived);
        setUnarchivedCount(unarchived);
    }, [myList]);

   

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

    const handleDeleteNote = (id) => {
        setMyList(prevList => prevList.filter(note => note.id !== id));
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

    const handleSubmit = (event) => {
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

        addNote({
            title: noteTitle,
            body: noteContent
        });

        setNoteTitle('');
        setNoteContent('');

        const data = getAllNotes();
        setMyList(data);
    };

    

    return (
        <div className="my-notes-app">
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
            {unarchivedCount === 0 && <EmptyState />}
            {unarchivedCount > 0 && (
                <NoteList
                    mylist={myList}
                    handleDeleteNote={handleDeleteNote}
                    handleArchiveNote={handleArchiveNote}
                    handleUnarchiveNote={handleUnarchiveNote}
                />
            )}
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

export default HomePage;
