import NoteCardItem from './NoteCardItem';
import React from 'react';
import { showFormattedDate } from '../utils';

function NoteList({mylist}) {
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
                    return (
                        <NoteCardItem 
                        key={note.id} 
                        title={note.title}
                        date={showFormattedDate(note.createdAt)} 
                        description={note.body} />
                    )
                })}  
            </div>
        </div>
    );
}

export default NoteList;