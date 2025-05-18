import ActionButtons from './ActionButtons';
import PropTypes from 'prop-types';
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

NoteCardItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    handleDeleteNote: PropTypes.func.isRequired,
    handleArchiveNote: PropTypes.func.isRequired,
    handleUnarchiveNote: PropTypes.func.isRequired
}

export default NoteCardItem;