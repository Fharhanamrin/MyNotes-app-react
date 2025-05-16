import CharCounter from './CharCounter';
function NoteForm() {
    return (
        <div className='container'>
            <div className="card">
            <h4>NoteForm 1</h4>
            <CharCounter />
            <div>
                <label htmlFor='note-title'>Note Title</label>
                <input type='text' id='note-title' placeholder='Input Judul MyNotes Mu'/>
            </div>
            <div>
                <label htmlFor='note-content'>Note Content</label>
                <textarea id='note-content' rows='5' placeholder='Input Note Content'></textarea>
            </div>
            </div>
        </div>
    )
}

export default NoteForm;