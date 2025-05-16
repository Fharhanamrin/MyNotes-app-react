import NoteCardItem from './NoteCardItem';
import React from 'react';
import { showFormattedDate } from '../utils';

function NoteList({ mylist, handleDeleteNote, handleArchiveNote, handleUnarchiveNote }) {
    return (
        <div className='container'>
            <h1 className='note-group'>Note List</h1>
            <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: '1rem',
                padding: '1rem',
            }}>
                {mylist.map((note) => {
                    if (note.archived) {
                        return null;
                    }
                    return (
                        <NoteCardItem
                            key={note.id}
                            id={note.id}
                            title={note.title}
                            archived={note.archived}
                            date={showFormattedDate(note.createdAt)}
                            description={note.body}
                            handleDeleteNote={handleDeleteNote}
                            handleArchiveNote={handleArchiveNote}
                            handleUnarchiveNote={handleUnarchiveNote}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default NoteList;