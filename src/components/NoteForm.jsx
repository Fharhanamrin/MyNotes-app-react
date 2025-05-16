import CharCounter from "./CharCounter";
function NoteForm({ noteTitle, noteContent, remaining, counter, handleSubmit, handleNoteTitleChange, handleNoteContentChange}) {

    return (
        <div className='container'>
            <div className="card">
                <h2>NoteForm </h2>
                <CharCounter remaining={remaining} counter={counter}/>
                <div className="mb-6">
                    <label htmlFor='note-title'>Note Title<span className='required'>*</span></label>
                    <input type='text' id='note-title' placeholder='Input Judul MyNotes Mu' value={noteTitle} onChange={handleNoteTitleChange} />
                </div>
                <div>
                    <label htmlFor='note-content'>Note Content<span className='required'>*</span></label>
                    <textarea id='note-content' rows='5' placeholder='Input Note Content' value={noteContent} onChange={handleNoteContentChange}></textarea>
                </div>
                <div>
                    <button type='submit' className='action-button' onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default NoteForm;