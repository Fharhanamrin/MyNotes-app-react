import ActionButtons from './ActionButtons';

function NoteCardItem({title,date,description}) {
    return (
        <div className='card-item-notes'>
            <h3 className='card-item-notes-title'>{title}</h3>
            <small>{date}</small>
            <p>{description}</p>
            <ActionButtons />
        </div>
    )
}

export default NoteCardItem;