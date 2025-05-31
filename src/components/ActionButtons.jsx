import { NavLink } from "react-router";
import PropTypes from "prop-types";

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

            <NavLink className="action-button archive-button" to={`/note-detail-page/${id}`}>Detail</NavLink>


        </div>
    )
}
ActionButtons.propTypes = {
    id: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
    handleDeleteNote: PropTypes.func.isRequired,
    handleArchiveNote: PropTypes.func.isRequired,
    handleUnarchiveNote: PropTypes.func.isRequired
}
export default ActionButtons;