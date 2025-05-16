import { showFormattedDate } from '../utils';
import NoteCardItem from './NoteCardItem';
function NoteListArchive({ mylist, handleDeleteNote, handleArchiveNote, handleUnarchiveNote }) {
    return (
        <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '1rem',
            padding: '1rem',
        }}>
            {mylist.map((note) => {
                if (!note.archived) {
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
    );
}

export default NoteListArchive;