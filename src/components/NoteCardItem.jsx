import ActionButtons from './ActionButtons';

function NoteCardItem({ id, title, archived, date, description, handleDeleteNote, handleArchiveNote, handleUnarchiveNote }) {
    return (
        <div className='card-item-notes'>
            <h3 className='card-item-notes-title'>{title}</h3>
            <small>{date}</small>
            <p>{description}</p>
            <ActionButtons
                id={id}
                archived={archived}
                handleDeleteNote={handleDeleteNote}
                handleArchiveNote={handleArchiveNote}
                handleUnarchiveNote={handleUnarchiveNote} />
        </div>
    )
}

export default NoteCardItem;