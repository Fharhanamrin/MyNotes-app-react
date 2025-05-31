import React, { useEffect, useState } from 'react';
import { getNote } from "../utils/network-data";
import { showFormattedDate } from "../utils/index";
import { NavLink, useParams } from 'react-router';
import Header from '../components/Header';
import PropTypes from 'prop-types';
import { useAuth } from '../components/AuthContext';
import { useNavigate } from "react-router";



function NoteDetailPage() {

    const { isAuthenticated, loading, theme } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading && !isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated]);

    const { id } = useParams();


    const [title, settitle] = useState("");
    const [body, setbody] = useState("");
    const [createdAt, setcreatedAt] = useState("");

    useEffect(() => {
        getSingleNote(id);
    }, []);

    const getSingleNote = async (id) => {
        const response = await getNote(id);
        if (response.error) {
            return;
        }
        const { title, body, createdAt } = response.data;
        settitle(title);
        setbody(body);
        setcreatedAt(createdAt);
    }

    return (
        <div className={`my-notes-app-${theme}`}>
            <Header />
            <div className={`container`}>
                <div className='card'>
                    <h2>Title : {title}</h2>
                    <p>createdAt : {showFormattedDate(createdAt)}</p>
                    <p>Content : {body}</p>
                </div>
                <NavLink className="action-button" to={`/`}>Kembali</NavLink>
            </div>
        </div>
    )
}

NoteDetailPage.propTypes = {
    note: PropTypes.object.isRequired
}
export default NoteDetailPage;
