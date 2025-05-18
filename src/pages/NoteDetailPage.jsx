import React from 'react';
import { getNote } from "../utils/local-data";
import { showFormattedDate } from "../utils/index";
import { NavLink, useParams } from 'react-router';
import Header from '../components/Header';
import PropTypes from 'prop-types';


function NoteDetailPage() {

    const { id } = useParams();
    const note = getNote(id);
    let { title, body, createdAt } = note

    return (
        <>
            <Header />
            <div className='container'>
                <div className='card'>
                    <h2>Title : {title}</h2>
                    <p>createdAt : {showFormattedDate(createdAt)}</p>
                    <p>Content : {body}</p>
                </div>
                <NavLink className="action-button" to={`/`}>Kembali</NavLink>
            </div>
        </>
    )
}

NoteDetailPage.propTypes = {
    note: PropTypes.object.isRequired
}
export default NoteDetailPage;
