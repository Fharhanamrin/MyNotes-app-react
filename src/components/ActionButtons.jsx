function ActionButtons({ id, archived, handleDeleteNote, handleArchiveNote, handleUnarchiveNote }) {
    return (
        <div>

            <button
                className="action-button delete-button"
                onClick={() => {
                    handleDeleteNote(id);
                }}
            >
                Delete
            </button>
            {archived === true ? (<button
                className="action-button archive-button"
                onClick={() => {
                    handleUnarchiveNote(id);
                }}
            >
                UnArchive
            </button>) : null}

            {archived === false ? (<button
                className="action-button archive-button"
                onClick={() => {
                    handleArchiveNote(id);
                }}
            >
                Archive
            </button>) : null}


        </div>
    )
}
export default ActionButtons;